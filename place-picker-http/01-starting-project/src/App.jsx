import { useState, useCallback, useRef, useEffect} from 'react'
import Logo from './assets/logo.png'
import AvailablePlaces from './components/AvailablePlaces'
import Places from './components/Places'
import Modal from './components/Modal'
import Error from './components/Error'
import DeleteConfirmation from './components/DeleteConfirmation'
import { updateUserPlaces } from './http'
import { fetchUserPlaces } from './http'

export default function App(){

    const selectedPlace = useRef()
    const [userPlace, setUserPlace] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [errorUpdate, setErrorUpdate] = useState()
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()

     //Using async/ await
     useEffect(() => {
        setIsFetching(true)
        async function fetchPlaces(){
          setIsFetching(true)
          try {
               const places = await fetchUserPlaces()
               setUserPlace(places)
          } 
          //Sending request failed. Eg - network connection crashed
          catch (error) {
              setError({message: error.message || 'Couldn\'t fetch user places, try again later'})
          }
          setIsFetching(false)
        }
        fetchPlaces()
        }, [])


    async function addPlaceHandler(currPlace){
        setUserPlace(prevPlaces => {
            if(!prevPlaces) prevPlaces = []
            if(prevPlaces.some(p => p.id === currPlace.id)) return prevPlaces;
            return [currPlace, ...prevPlaces]
        })
        //We're performing optimistic updating, means updating local state before sending request and waiting for response. So, UI is updated instantly, with request being send behind the scenes. But, sending a request could fail, so better to handle errors.
        try{
            //Directly not using userPlaces, as would be updated after scheduled state update only
            await updateUserPlaces([currPlace, ...userPlace])
        } 
        catch(error){
            //In case of error, set back to previous state and display error state
            setUserPlace(userPlace)
            setErrorUpdate({ message: error.message || 'Failed to update places' })
        }
    }

    function startRemovalHandler(p){
        setOpenModal(true)
        selectedPlace.current = p
    }

    function stopRemovalHandler(){
        setOpenModal(false)
    }

    const removePlaceHandler = useCallback(async function removePlaceHandler() {
        setUserPlace(prevPlaces => prevPlaces.filter(p => p.id != selectedPlace.current.id))
        try {
            await updateUserPlaces(userPlace.filter(p => p.id != selectedPlace.current.id))
        } 
        catch (error) {
            setUserPlace(userPlace)
            setErrorUpdate({
                message: error.message || 'Failed to delete place'
            })
        }
        
        setOpenModal(false)
    }, [userPlace])

    function errorHandler(){
        setErrorUpdate(null)
    }

    return(
        <>
        <Modal open={errorUpdate} onClose={errorHandler}>
            {errorUpdate && <Error title="An error occured" message={errorUpdate.message} onConfirm={errorHandler}/>}
        </Modal>
        <Modal open={openModal} onClose={startRemovalHandler}>
            <DeleteConfirmation onConfirm={removePlaceHandler} onCancel={stopRemovalHandler} />
        </Modal>
        <header>
        <img src={Logo} alt="logo" />
        <h1>Placepicker</h1>
        <p>Create a personal collection of places you would like to visit or you have visited</p>
        </header>
        <main>
        {error && <Error title="An error occured" message={error.message} />}
        {!error && <Places 
        title = "I'd like to visit" 
        fallbackText = "Select places you want to visit before or have already visited"
        isLoading = {isFetching}
        loadingText = "Fetching your places...."
        places={userPlace}
        onSelectPlace={startRemovalHandler} />}
        <AvailablePlaces onSelectPlace={addPlaceHandler}/>
        </main>
        </>
    )
}