import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  //Returns dispatch function from the store
  const dispatch = useDispatch()

  //A function that receives the current state and returns a part of the state or some derived data. Can use both useSelecter/ useStore but former is more convenient as allows us to select a part of state managed by store 
  //States
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showState)

  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }

  const multiplyHandler = () => {
    //Attaching payload to dispatch action
    dispatch({type: 'multiply', amount: 5})
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={multiplyHandler}>*5</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
