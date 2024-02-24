import PageContent from "../PageContent";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    //Returns the nearest ancestor Route error, which could be a loader/action error or a render error.
    const error = useRouteError()
    let title = "An error occurred"
    let message = "Something went wrong"
    if(error.status === 500){
        //message = JSON.parse(error.data).message
        message = error.data.message
    }
    if(error.status === 404){
        title = "Not found"
        message = "Couldn't find resource or page"
    }
    return <PageContent title="An error occured">
        <p>Something went wrong</p>
    </PageContent>
}