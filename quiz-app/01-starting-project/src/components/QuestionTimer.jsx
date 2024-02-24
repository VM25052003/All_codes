import { useState, useEffect } from "react"

/* Problem here is that we move on to next question in 10 sec, but timer depletes in 5 sec. This happens as interval is getting triggered twice, so is empty in half time. So, we have to use a cleanup function. Also progress bar isn't reset as QuestionTimer component isn't recreated for every question, so we use 'key' prop to do so. As we select answers, they jump around, as in this quiz component, we are shuffling answers. It executes whenever this quiz component function executes. Till now, this function only executes again if the state changes, on moving to a new question. Instead now we have this in-between state where we highlight the selected answer and not moving to a new question, and therefore this quiz component function gets executed again, and hence we shuffle those answers again. 
One solution is to add another state to shuffle answers, along with useEffect() that only executes once the component renders or question changes. But it can be avoided
Another option is to useRef(). But problem here is that answer now stays selected. To get rid of this issue, we can create a new answer component*/

export default function QuestionTimer(props){
    const [ remainingTime, setRemainingTime ] = useState(props.timeout)
    useEffect(() => {
//useEffect() here as when we update the remaining time, this component function executes again and this timer would be recreated, and we therefore have multiple timers up and running. 
        const timer = setTimeout(props.onTimeout, props.timeout)
        return () => {
            clearTimeout(timer)
        }
    }, [props.timeout, props.onTimeout])

    useEffect(() => {
//useEffect() as we're updating the state here, this would re-execute this component. We would create a new interval where we would also update the state again and we would quickly have multiple intervals up and running.
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);
        return () => {
            clearInterval(interval)
        }
//Empty[] as not using props or state values
    }, [])

    return (
//To update progress bar, need an interval that executes some code every couple of msec, so require to manage some state in this component, so that progress bar is rendered whenever state changes
        <progress className={props.mode} id="question-time" max={props.timeout} value={remainingTime}/>
    )
}