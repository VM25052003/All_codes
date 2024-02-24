import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
    const fetcher = useFetcher()
    const { data, state } = fetcher

    //useNavigation() to be used with actual route transitions, so can useEffect()
    useEffect(() => {
        if(state.action === 'idle' && data && data.message){
            window.alert(data.message)
        }
    }, [data, state])
    
    //If used <Form />, it would navigate to , but in case of <fetcher.form />, would still trigger an action/ loader without actually navigating to the page to which action/ loader belongs. It won't initialize a route transition
  return (
    <fetcher.Form name="newsletter" method="post" action='/newsletter'className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;