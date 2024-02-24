import { useState } from "react";
import { log } from "../../log";

export default function ConfigureCounter(props){
    log('<ConfigureCounter /> rendered', 1);
    const [enteredNumber, setEnteredNumber] = useState(0)
    function changeHandler(e){
        setEnteredNumber(+e.target.value)
    }
    function setHandler(){
        props.onSetCount(enteredNumber)
        setEnteredNumber(0)
    }
    return (
        <>
        <section id="configure-counter">
            <h2>Set Counter</h2>
            <input type="text" onChange={changeHandler} value={enteredNumber}/>
            <button onClick={setHandler}>Set</button>
        </section>
        </>
    )
}