// Challenge / Exercise
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/Home";
import EventsPage, {loader as eventsLoader} from "./components/pages/Events";
import EventDetailPage, {loader as detailLoader, action as detailAction} from "./components/pages/EventDetail";
import NewEventPage from "./components/pages/NewEvent";
import EditEventPage from "./components/pages/EditEvent";
import ErrorPage from "./components/pages/Error";
import Root from "./components/pages/Root";
import EventRootLayout from "./components/pages/EventRoot";
import { action as manipulativeAction } from "./components/EventForm";
import NewsletterPage, { action as newsLetterAction } from "./components/NewsLetter";

/* Diff. between absolute and relative paths
absolute path - doesn't care about current url (append with root). Need to specify direct path only. Starts iwth '/
relative path - append with current url. Here if use 'event', current being '/', append to localhost:3000/events directly'*/
const routeDefinition = [{
  path : '/', 
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    //Home page for '/'
    { index: true, element: <HomePage />},
    { path: '/events', element: <EventRootLayout />, children:[
      //Home page for '/events'
      //loader will take the response data and make it available into page being rendered in element
      { index: true, element: <EventsPage />, loader: eventsLoader},
      { path: ':eventId',
       id: 'event-detail',
       loader: detailLoader, 
       children: [
       {index: true, element: <EventDetailPage/>, action: detailAction},
       { path: ':edit', element: <EditEventPage />, action: manipulativeAction}
       ]},
      { path: 'new', element: <NewEventPage />, action: manipulativeAction}
    ]},
    { path: 'newsletter', element: <NewsletterPage />, action: newsLetterAction}
  ]}
]

const router = createBrowserRouter(routeDefinition)

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
