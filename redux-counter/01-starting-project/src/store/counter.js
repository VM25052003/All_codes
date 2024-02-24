import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    //Function that accepts an initial state, an object full of reducer(), and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
    //The slice's name, optional. Used to namespace the generated action types.
    name: 'counter',
    initialState: { counter: 0, showState: true},
    reducers: {
        //Actions to be performed
        increment(state) {
    //Forbidden, but redux-toolkit internally uses another toolkit imgur, to detect code and automatically clone existing state, create a new state object, keep all the unedited state and overwriting the edited state in immutable way. Hence, only write code to be edited
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        multiply(state, action) {
            state.counter *= action.payload
        },
        toggle(state) {
            state.showState = !state.showState
        }
    }
})

//Action creators for the types of actions that are handled by the slice reducer.
export const counterActions = counterSlice.actions
export default counterSlice.reducer