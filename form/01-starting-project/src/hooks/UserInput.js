import { useState } from "react"

export default function UserInput(defaultValue, validationFn){
    //If have two input elements, email and password, have to call hook twice
    const [userInput, setUserInput] = useState(defaultValue)
    const [editInput, setEditInput] = useState(false)

    const valueIsValid = validationFn(userInput)

    //to store multiple properties in a state, to later use in <input>
    function userInputHandler(event){
        setUserInput(event.target.value)
        //Again set to false once user starts typing again
        setEditInput(false)
    } 

    function editInputHandler(){
        setEditInput(true)
    }

    return { value: userInput, userInputHandler, editInputHandler, error: !editInput && !valueIsValid}
}