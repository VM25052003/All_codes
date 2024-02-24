import EventForm from "../EventForm"
import { useRouteLoaderData } from "react-router-dom"

export default function EditEventPage() {
    //Using loader data, it searches for closest loader data and at highest level for which it was loaded, here it is 'edit' route. To get from 'detail' page, we userouteLoaderData(). Similar to previous one, but takes id as an argument
    //need to access a loader from the parent, you should use the useRouteLoader hook instead (which will require you to assign an id to the route who's loader data you want to get access to).
    const detail = useRouteLoaderData('event-detail').event
    return <EventForm method="patch" event={detail}/>
}