import { Link, Outlet } from "react-router-dom";
import Header from "../../Header";

export default function EventDetail(){
    return (
        <>
        <Outlet />
        <Header>
            <Link to='/events' className="nav-item">View all items</Link>
        </Header>
        <article id="event-details">
            <header>
                <h1>EVENT TITLE</h1>
                <nav>
                    <button className="">Delete</button>
                    <Link to='edit'>Edit</Link>
                </nav>
            </header>
            <div id='events-details-content'>
                <img src="" alt="" /> 
                <div id="events-details-info">
                    <div>
                        <p id="events-details-location">EVENT LOCATION</p>
                        <time dateTime={`Todo-DateT$Todo-Time`}>DATE @ TIME</time>
                    </div>
                    <p id="event-details-description">EVENT DESCRIPTION</p>
                </div>
            </div>
        </article>
        </>
    )
}