const redux = require('redux')

//A reducer() is a standard JS func., but it will it be called by the Redux library and will always receive two pieces of input, the old or existing state and the dispatched action to return a new state object as output. Must be a pure func., basically means that the same inputs, should produce exactly the same outputs/ Also no side effects inside of that func., so sending HTTP request, writing to local storage or fetch something from local storage there.
const counterReducer = (state = {counter: 0}, action) => {
    //When store is initialised, redux will execute this reducer() for first time, so there state will be undefined. So, pass a default value
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }
    return state
}

//Creating central data state store, taking reducer() as parameter, responsible for changing that store
const store = redux.createStore(counterReducer)

let latestState
const counterSubscriber =() => {
    //Returns the latest state snapshot
    latestState = store.getState()
    console.log(latestState)
}

//Execute subscriber(), whenever state changes
store.subscribe(counterSubscriber)

//Dispatching an action, which is a JS object with type property, as an identifier
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})
