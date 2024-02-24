export default async function fetchAvailablePlaces(){
    const response = await fetch('http://localhost:3000/places')
    const responseData = await response.json()
    //Backend sends back an error response. 
    if(!response.ok){
    throw new Error('Failed to fetch places')
    }
    return responseData.places
}

export async function fetchUserPlaces(){
    const response = await fetch('http://localhost:3000/user-places')
    const responseData = await response.json()
    //Backend sends back an error response. 
    if(!response.ok){
    throw new Error('Failed to fetch user places')
    }
    return responseData.places
}

//On backend, expects places[]. Default is 'GET' method, so need to configure 
export async function updateUserPlaces(places){
    const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
//data to be attached as request body to outgoing request. But js[] are not attachable format, so have to convert to json format. Used {places: places}, as backend expects an object that contains a places key, which will then actually contain this array.
    body: JSON.stringify({ places }),
    headers: {
        'Content-Type': 'application/json'
    }})
    const responseData = await response.json()
    if(!response.ok){
        throw new Error('Failed to update user data')
    }
    //In backend API, response contains an object with message property
    return responseData.message
}