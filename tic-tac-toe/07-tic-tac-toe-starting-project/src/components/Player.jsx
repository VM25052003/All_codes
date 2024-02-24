import { useState } from "react"

export default function Player(props) {
    const [editing, setEditing] = useState(false)
    const [name, setName] = useState(props.name)
    /* When updating your state based on the previous value of that state, you should pass a function to that state updating function instead of that new state value you wanna have. Because this function which you pass here will be called by React and it will automatically get the current state value. 
setEditing(editing => !editing). React in the end, scheduling those state updates you're triggering with those state updating functions. So this state update here is not performed instantly but scheduled in the future. 
1)  If we do setEditing(!editing) -> schedules state update to true
             setEditing(!editing) -> schedules state update to true
we would expect clicking the button shouldn't do anything. But got opp. behaviour
React is scheduling these state updates and both are based on the current value of editing, which initially here is false.So both these lines here are based on isEditing being false because that's the value editing has initially when this component function gets executed for the first time. 
2) setEditing(editing => !editing)
   setEditing(editing => !editing)
Here nothing happens as scheduled update automatically get the latest state value for this editing state from React at the point of time where this scheduled update is executed. */
    function editHandler() {
        setEditing(editing => !editing) 
        if(editing) props.onNameChange(props.symbol, name)
    }
    function nameHandler(event) {
        setName(event.target.value)
    }
    return (
        <>
        <li className={props.isActive? 'active': undefined}>
            <span className="player">
            {!editing? <span className="player-name">{name}</span>: <input type="text" required value={name} onChange={nameHandler} />}
            <span className="player-symbol">{props.symbol}</span>
            </span>
            <button onClick={editHandler}>{!editing? 'Edit': 'Save'}</button>
        </li>
        </>
    )
}