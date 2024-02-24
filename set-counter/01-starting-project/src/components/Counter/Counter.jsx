import { useState, memo, useCallback, useMemo } from 'react';
import History from './History.jsx';
import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import Output from './Output.jsx';
import { log } from '../../log.js';

function isPrime(n) {
  log('Calculating if is prime number', 2, 'other');
  if (n <= 1) return false;

  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/* memo will take a look at the props of your component() and whenever the component() would normally execute again for example, because the app component() executes, memo will take a look at the old prop value and at the new prop value that would be received now if that component() would execute and if those prop values are exactly the same, this component() execution here will be prevented by memo. 
Wrap memo around a component that's as high up in the component tree as possible because if that component is then prevented from executing again, all the nested components won't be executed again.
If wrapped around all components, React always has to check the props before it executes the component function, costing performance, and especially if wrapped a function that almost always gets changed props.*/
const Counter = memo(function Counter(props){
log('<Counter /> rendered', 1);
/* Executed everytime as used directly inside Counter. If Counter reexecutes only because counter changes, isPrime will yield the same result only. As memo is used for Component(), useMemo() can be used for normal functions that are called inside component()*/
const initialPrime = useMemo(() => isPrime(props.initialCount), [props.initialCount]);
const [counterChanges, setCounterChanges] = useState([{value: props.initialCount, id: Math.random()*1000}]);
const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value, 0
);

const incrementHandler = useCallback(function incrementHandler(){
    setCounterChanges((prevCounterChanges) => [{value: 1, id: Math.random()*1000}, ...prevCounterChanges]);
}, [])

const decrementHandler = useCallback(function decrementHandler(){
    setCounterChanges((prevCounterChanges) => [{value: -1, id: Math.random()*1000}, ...prevCounterChanges]);
}, [])

return (
    <section className="counter">
        <p className="counter-info">The intial counter was {props.initialCount}. It {' '} <strong>is {initialPrime? 'a': 'not a'}</strong> prime number</p>
        <p>
            <IconButton icon={MinusIcon} onClick={decrementHandler}>Decrement</IconButton>
            <Output value={currentCounter}/>
            <IconButton icon={PlusIcon} onClick={incrementHandler}>Increment</IconButton>
        </p>
        <History history={counterChanges}/>
    </section>
)
})

export default Counter