import classes from './EventsList.module.css';
import { useLoaderData } from "react-router-dom"
import { Link } from 'react-router-dom';

function EventsList({ events }) {
  /* useLoader() to get access to closest loader data. Don't use on higher level than fetching your data
  const events = useLoaderData() */

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
