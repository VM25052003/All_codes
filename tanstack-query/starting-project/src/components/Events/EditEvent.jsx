import { Link, useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import EventForm from "./EventForm";

export default function EditEvent(){
    const navigate = useNavigate()
    function submitHandler(formData){

    }
    function closeHandler(){
        navigate('../')
    }
    return(
        <Modal onClose={closeHandler}>
            <EventForm inputData={null} onSubmit={submitHandler}>
                <Link to="../">Close</Link>
                <button type="Submit">Update</button>
            </EventForm>
        </Modal>
    )
}