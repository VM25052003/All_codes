import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

createSlice({
//Function that accepts an initial state, an object full of reducer(), and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
//The slice's name. Used to namespace the generated action types.
name: 'counter',
initialState: { counter: 0, showState: true},
reducers: {
    increment(state) {
//Forbidden, but redux-toolkit internally uses another toolkit imgur, to detect code and automatically clone existing state, create a new state object, keep all the unedited state and overwriting the edited state in immutable way. Hence, only write code to be edited
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    multiply(state, action) {
        state.counter *= action.amount
    },
    toggle(state) {
        state.showState = !state.showState
    }
    }
})

//Reducer function
const counterReducer = (state = { counter: 0, showState: true}, action) => {
    
    if(action.type === 'increment'){
        // state.counter++ 
        // return state
        //Would work but never should mutate state
        return {
            counter: state.counter + 1,
            //Would always need to set all state, as if not would treat as falsy only. 
            showState: state.showState
        }
    }
    if(action.type === 'multiply'){
        return {
            //Extracting payload attached to action 
            counter: state.counter * action.amount,
            showState: state.showState
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
            showState: state.showState
        }
    }
    if(action.type === 'toggle'){
        return {
            counter: state.counter,
            showState: !state.showState
        }
    }
    return state
}

//Store creation and passing it a reducer function
const store = createStore(counterReducer)

export default store
