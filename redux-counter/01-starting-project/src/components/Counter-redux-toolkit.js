import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  //A function that receives the current state and returns a part of the state or some derived data. Can use both useSelecter/ useStore but former is more convenient as allows us to select a part of state managed by store 
  //States
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showState)

  const incrementHandler = () => {
    //Execute as method as increment() execution creates a type set to this acutomatically created unique action identifier
    dispatch(counterActions.increment()) 
  }

  const multiplyHandler = () => {
    dispatch(counterActions.multiply(5)) //{ type: 'SOME UNIQUE IDENTIFIER', payload: 5}
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
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
