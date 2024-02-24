import Places from "./Places";
import Error from "./Error";
import { sortPlacesByDistance } from '../loc'
import fetchAvailablePlaces from "../http";
import useFetch from "../hooks/useFetch";

async function fetchSortedPlaces(){
    const places = await fetchAvailablePlaces()
    return new Promise((resolve, reject) => {
        //Getting user's location. Use setchingIsFetching() inside try catch as now below is a cb(), instead of async await. Otherwise it would set loading to false too early
    navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
        resolve(sortedPlaces)
        })
    })
}

export default function AvailablePlaces(props){
    const { fetchedData: availablePlace, isFetching, error } = useFetch(fetchSortedPlaces, [])
    /*Using then
    useEffect(() => {
    //Can create infinite loop as execute everytime component() reexecutes as updating state
    fetch('http://localhost:3000/places').then(response => {
        return response.json()
    }).then(responseData => {
        setAvailablePlace(responseData.places)
    })}, []) 

    //Using async/ await
    useEffect(() => {
      async function fetchPlaces(){
        setIsFetching(true)
        try {
             
        } 
        //Sending request failed. Eg - network connection crashed
        catch (error) {
            setError({message: error.message || 'Couldn\'t fetch places, try again later'})
            setIsFetching(false)
        }
      }
      fetchPlaces()
      }, []) */
  
    if(error){
        return <Error title="An error occured" message={error.message} />
    }

    return (
        <Places 
        title = "Available Places"
        places = {availablePlace}
        isLoading = {isFetching}
        loadingText = "Fetching data...."
        fallbackText = "No places available"
        onSelectPlace={props.onSelectPlace}
        />
    )
}