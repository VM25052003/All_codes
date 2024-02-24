import { Suspense } from "react";
import EventsList from "../EventsList"
import { useLoaderData, json, defer, Await } from "react-router-dom"

export default function EventsPage() {
    /* const events = useLoaderData().events
    return <EventsList events={events}/> */
    const { events } = useLoaderData()
    return (
    //Shows fallback while  other data loads
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>} >
    {/* On resolved, execute what's inside <Await> */}
    <Await resolve={events}>{loadedEvents => <EventsList events={loadedEvents}/>}</Await>
    </Suspense>
    )
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
        if(!response.ok){
            // throw new Response(JSON.stringify({ message: 'Couldn\'t fetch data'}),  { status: 500 }), if using json to create application responses, no need to parse data there
            throw json({ message: 'Couldn\'t fetch data'},  { status: 500 })
        }
        else{
            const responseData = await response.json()
            return responseData.events
        }
}

export function loader() {
    //Defer loading certain parts of components only, bundling different http request going on this page, as promise, to eventually resolve to another value, and load that component even if future value isn't there yet
    return defer({
        events: loadEvents()
    })
}