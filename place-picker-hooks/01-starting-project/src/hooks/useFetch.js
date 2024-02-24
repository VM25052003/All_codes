import { useEffect, useState } from "react"

export default function useFetch(fetchedFn, initialValue){
    const [fetchedData, setFetchedData] = useState(initialValue)
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    //Using async/ await
    useEffect(() => {
        setIsFetching(true)
        async function fetchData(){
          setIsFetching(true)
          try {
               const data = await fetchedFn()
               setFetchedData(data)
          } 
          //Sending request failed. Eg - network connection crashed
          catch (error) {
              setError({message: error.message || 'Failed to fetch data'})
          }
          setIsFetching(false)
        }
        fetchData()
    }, [fetchedFn])

    return {
        fetchedData, isFetching, setFetchedData, error
    }
}