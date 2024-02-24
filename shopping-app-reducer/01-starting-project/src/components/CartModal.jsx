//Forward props, including items, update quantity function, title and actions
//Imperative handler to open dialog
//Forward items, and update quantity function to cart

import { forwardRef, useImperativeHandle, useRef} from "react";
import Cart from "./Cart";
import { createPortal } from "react-dom";

const CartModal = forwardRef(function CartModal(props, ref){
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal()
            }
        }
    })

    return createPortal(
    <dialog id="modal" ref={dialog}>
        <h2>{props.title}</h2>
        <Cart />
        <form method="dialog" id="modal-actions">{props.actions}</form>
    </dialog>, document.getElementById('modal')
   )
})

export default CartModal