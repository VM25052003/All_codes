import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsLetterSignup';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({isActive}) => isActive? classes.active: undefined} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive? classes.active: undefined} to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive? classes.active: undefined} to="/newsletter">NewsLetter</NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
