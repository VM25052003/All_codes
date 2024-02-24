import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal(props){
    const dialog = useRef()
    useEffect(() => {
        if(props.open) dialog.current.showModal()
        else dialog.current.close()
    }, [props.open])

    return (
        createPortal(
            <dialog className="modal" ref={dialog} onClose={props.onClose}>
                {open? props.children: null}
            </dialog>, document.getElementById('modal')
        )
    )
}