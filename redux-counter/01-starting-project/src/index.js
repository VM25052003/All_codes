import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
//import store from './store';
import store from './store/index-redux-toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Providing to the highest level so that all the child components can access this store, set as prop
root.render(<Provider store={store}><App /></Provider>);
