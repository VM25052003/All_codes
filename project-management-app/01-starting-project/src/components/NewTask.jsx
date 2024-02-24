import { useState } from "react"

export default function NewTask(props) {
//Have to pass task from NewTask -> Tasks -> SelectedProject -> App.js, this is called prop drilling. that //task state is initially undefined because we're not passing an initial value to useState. But then thereafter, we start typing into input field, the value gets changed to a string and therefore this value prop here first receives undefined, telling React element is uncontrolled by React state and then it suddenly changes to a string which tells React the opposite. The solution is simply to add an empty string as a default value for useState here.
    const [task, setTask] = useState('')

    function changeHandler(event){
        setTask(event.target.value)
    }

    function clickHandler() {
    //Forward to app component and reset task field
    if(task.trim() === '') return;
    props.onAddTask(task)
    setTask('')
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" value={task} onChange={changeHandler} className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onClick={clickHandler} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}