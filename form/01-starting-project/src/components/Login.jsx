import { useRef, useState} from "react"

export default function Login(){
    const [validForm, setValidForm] = useState(true)

    //To validate using ref(), only done upon submission
    const email = useRef()
    const password = useRef()

    function submitHandler(e){
        e.preventDefault()
        const enteredEmail = email.current.value
        const enteredPassword = password.current.value
        //to check if invalid on focus 
        const invalidEmail = !enteredEmail.includes('@') 
        if(invalidEmail){
            setValidForm(false)
            return
        }
        setValidForm(true)
    }

    return(
        <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <div className="control-row">
                <div className="control no-margin">
                <label htmlFor="email">EMAIL</label>
                <input id="email" type="email" name="email" ref={email}/>
                <div className="control-error">{!validForm && <p>Please enter a valid email</p>}</div>
                </div>
                <div className="control no-margin">
                <label htmlFor="password">PASSWORD</label>
                <input id="password" type="password" name="password" ref={password}/>
                </div>
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    )
}