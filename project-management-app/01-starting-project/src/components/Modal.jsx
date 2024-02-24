import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
import Button from "./Button"

const Modal = forwardRef(function Modal(props, ref) {
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
        //showModal() method provided by built-in dialog but open() is provided by Modal component to others
            open(){
                dialog.current.showModal()
            }
        }
    })
    //Passed children prop to use modal as wrapper around any component. ''/'', for transparecy
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-6 rounded-md shadow-md">
            {props.children}
            <form method="dialog" className="mt-4"><Button>{props.buttonCaption}</Button></form>
        </dialog>, document.getElementById('modal-root')
    )
})

export default Modal