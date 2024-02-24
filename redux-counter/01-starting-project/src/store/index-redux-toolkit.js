import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import authReducer from './auth';

//Store creation and passing it a reducer function
const store = configureStore({
    //Assign reducers created of multiple slices. Works as root reducer in case of single function, and combined in case of multiple. Mapping against each
    reducer: {counter: counterReducer, auth: authReducer}
})


export default store
