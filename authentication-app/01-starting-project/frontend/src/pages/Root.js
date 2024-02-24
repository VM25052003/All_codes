import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';

function RootLayout() {
  // const navigation = useNavigation();
  //Log user out after one 1h, invalidate token and remove it from local storage, updating the UI accordingly
  //useLoaderData() is used for sibling routes, while useRouteLoaderData() is used for child routes
  const token = useLoaderData()
  const submit = useSubmit()

  useEffect(() => {
    if(!token) {
      return
    }

    if(token === 'EXPIRED'){
      submit(null, {action: '/logout', method: 'post'})
      return
    }
  
    setTimeout(() => {
      //Submit Form programmatically, to logout automatically after 1h
      submit(null, {action: '/logout', method: 'post'})
    }, 1*60*60*1000);
  }, [token, submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
