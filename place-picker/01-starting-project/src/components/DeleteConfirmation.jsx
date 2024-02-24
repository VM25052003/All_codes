export default function DeleteConfirmation(props){
    return(
        <>
        <div id="delete-confirmation">
            <h2>Are you sure</h2>
            <p>Do you really want to remove this place?</p>
            <div id="confirmation-actions">
                <button className="button" onClick={props.onConfirm}>Yes</button>
                <button className="button-text" onClick={props.onCancel}>No</button>
            </div>
        </div>
        </>
    )
}