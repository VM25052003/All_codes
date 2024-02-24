import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(props, ref){
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal()
            },
            close: () => {
                dialog.current.close()
            }
        }
    })
    return (
        createPortal(
            <dialog className="modal" ref={dialog}>{props.children}</dialog>, document.getElementById('modal')
        )
    )
})

export default Modal