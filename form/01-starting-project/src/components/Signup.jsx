import { useState } from "react"

export default function Signup(){
    const [passwordUnequal, setPasswordUnequal] = useState(false)
    function submitHandler(e){
        e.preventDefault()
        //Native built-in feature to get hold of values, by passing form to that. Must have 'name' prop set
        const fd = new FormData(e.target)
//let enteredEmail = fd.get('email') or for all values
//entries() on fd object returns key-value pair, and later extract value from pair. Here, select field is missing
        const data = Object.fromEntries(fd.entries())
//Extract selection field
        const acquisitionChannel = fd.getAll('acquisition')
        //Merge with data under property acquisition
        data.acquisition = acquisitionChannel
        //data.confirm-password won't word here, so used [] instead
        if(data.password !== data['confirm-password']){
            setPasswordUnequal(true)
            return
        }
        //Reset after submission
        e.target.reset()
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <h2>Welcome on board!</h2>
            <p>We just need a little bit of data from you to get you started 🚀</p>
            <div className="control">
                <label htmlFor="email">EMAIL</label>
                <input id="email" type="email" name="email" required/>
            </div>
            <div className="control-row">
                <div className="control">
                <label htmlFor="password">PASSWORD</label>
                <input id="password" type="password" name="password" required minLength={6}/>
                </div>
                <div className="control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input id="confirm-password" type="password" name="confirm-password" required/>
                    <div className="control-error">{passwordUnequal && <p>Passwords don't match</p>}</div>
                </div>
            </div>
            <hr />
            <div className="control-row">
                <div className="control">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name"/>
                </div>
                <div className="control">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name"/>
                </div>
            </div>
            <div className="control">
                <label htmlFor="phone">What best describes your role?</label>
                <select name="role" id="role">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="employee">Employee</option>
                    <option value="founder">Founder</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <fieldset>
                <legend>How did you find us?</legend>
                <div className="control">
                    <input type="checkbox" id="google" name="acquisition" value="google"/>
                    <label htmlFor="google">Google</label>
                </div>
                <div className="control">
                    <input type="checkbox" id="friend" name="acquisition" value="friend"/>
                    <label htmlFor="friend">Referred by Friend</label>
                </div>
                <div className="control">
                    <input type="checkbox" id="other" name="acquisition" value="other"/>
                    <label htmlFor="other">Other</label>
                </div>
            </fieldset>
            <div className="control">
                <label htmlFor="terms-and-conditions">
                    <input type="checkbox" id="terms-and-conditions" name="terms" required/>
                    I agree to terms and conditions
                </label>
            </div>
            <p className="form-actions">
                <button type="reset" className="buttion button-flat">Reset</button>
                <button type="submit" className="button">Submit</button>
            </p>
        </form>
        </>
    )
}