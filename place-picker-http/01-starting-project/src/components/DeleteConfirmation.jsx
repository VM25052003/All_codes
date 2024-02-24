import { useEffect } from "react";
import ProgressBar from "./ProgessBar";

export default function DeleteConfirmation(props){
    useEffect(() => {
        const timer = setTimeout(() => props.onConfirm(), 3000)
        return clearTimeout(timer)
    }, [props.onConfirm])
    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div id="confirmation-actions">
                <button className="button" onClick={props.onConfirm}>Yes</button>
                <button className="button-text" onClick={props.onCancel}>No</button>
            </div>
            <ProgressBar timer={3000}/>
        </div>
    )
}