import { json, useRouteLoaderData, useParams, redirect, defer, Await } from "react-router-dom"
import EventItem from "../EventItem"
import EventsList from "../EventsList"
import { Suspense } from "react"

export default function EventDetailPage() {
    //const detail = useRouteLoaderData('event-detail').event
    const { event, events } = useRouteLoaderData('event-detail')
    return (
        <>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={event}>{loadedEvent => <EventItem event={loadedEvent} />}</Await>
        </Suspense>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={events}>{loadedEvents => <EventsList events={loadedEvents}/>}</Await>
        </Suspense>
        </>
    )
}

async function loadEvent(id){
    const response = await fetch('http://localhost:8080/events/' + id)
    if(!response.ok){
        throw json({message: 'Couldn\'t fetch details for selected event'}, {status: 500})
    }
    else {
        const responseData = await response.json()
        return responseData.event
    }
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

export async function loader({request, params}) {
    const id = params.eventId
    return defer({
        event: await loadEvent(id),
        events: loadEvents()
    })
}

export async function action({params, request}){
    const id = params.eventId
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method
    })
    if(!response.ok){
        throw json({message: 'Couldn\'t fetch details'}, {status: 500})
    }
    return redirect('/events')
}