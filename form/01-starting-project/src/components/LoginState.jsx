import {isEmail, isNotEmpty, hasMinLength} from '../util/validation'
import Input from "./Input"
import UserInput from "../hooks/UserInput"

export default function LoginState(){
    //Pass and anonymous function to hook to execute along with a value
    const {value: email, userInputHandler: userEmailHandler, editInputHandler: editEmailHandler, error: emailError} = UserInput('', (value) => isEmail(value) && isNotEmpty(value))

    //to check if invalid on focus 
    const {value: password, userInputHandler: userPasswordHandler, editInputHandler: editPasswordHandler, error: passwordError} = UserInput('', (value) => hasMinLength(value, 6))

    function submitHandler(e){
        e.preventDefault()
        if(emailError || passwordError) return
        console.log(email, password)
    }

    return(
        <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <div className="control-row">
                <Input id="email" type="email" name="email" label="Email"
                onChange={userEmailHandler} value={email} 
                onBlur={editEmailHandler} 
                error={emailError && 'Please enter a valid email!'}
                />
                <Input id="password" type="password" name="password" label="Password"
                onChange={userPasswordHandler} value={password}
                onBlur={editPasswordHandler}
                error={passwordError && 'Please enter a valid password!'}
                />
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    )
}