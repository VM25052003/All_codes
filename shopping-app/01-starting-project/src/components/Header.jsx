import { useRef, useContext } from "react"
import CartModal from './CartModal'
import { CartContext } from "../store/cart-context"

//Logo, brand name and 'Your cart' button
export default function Header(props) {
    const modal = useRef()
    const cartContxt = useContext(CartContext)
    const quantity = cartContxt.items.length
    function openCartHandler() {
        modal.current.open()
    }
    let modalActions = <button>Close</button>;
    //Items exist in cart, given option to close and checkout both
    if(quantity > 0){
        modalActions = (
            <>
            <button>Close</button>
            <button>Checkout</button>
            </>
        )
    }
    return (
        <>
       <CartModal ref={modal} title="Your Cart" actions={modalActions}/>
        <header id="main-header">
            <div id="main-title">
                <img src="logo.png" alt="Elegant Context"/>
                <h1>Elegant Context</h1>
            </div>
            <p>
                <button onClick={openCartHandler}>Cart({quantity})</button>
            </p>
        </header>
        </>
    )
}