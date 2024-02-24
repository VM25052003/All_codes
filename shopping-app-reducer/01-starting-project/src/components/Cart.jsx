import { useContext } from "react"
import { CartContext } from "../store/cart-context"


//Default OPTION 1 to use CartContext: 
export default function Cart() {
//Can also destructure like props, { items }, but access as items.length the, not cartContxt.items.length. 
const cartContxt = useContext(CartContext)
//Find price
const totalPrice = cartContxt.items.reduce((amount, item) => amount + item.price*item.quantity, 0)
const formattedTotalPrice = `$${totalPrice.toFixed(2)}`
return (
<div id="cart">
{/* No items exist in cart */}
{/* Not getting error for using cartContxt.length instead of cartContxt.items.length as items[] is default in cart-context*/}
    {cartContxt.items.length === 0 && <p>No items in Cart</p>}
{/*Items exist so map, against id, name, price, increase price if + and decrease if */}
    {cartContxt.items.length > 0 && (
    <ul id="cart-items">
        {cartContxt.items.map(item => {
            const formattedPrice = `$${item.price.toFixed(2)}`
            return (
                <li key={item.id}>
                    <div>
                        <span>{item.name}</span>
                        <span>({formattedPrice})</span>
                    </div>
                    <div className="cart-item-actions">
                        <button onClick={() => cartContxt.onUpdateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => cartContxt.onUpdateQuantity(item.id, 1)}>+</button>
                    </div>
                </li>
            )
        })}
    </ul>
)}
{/* Display cart total */}
<p id="cart-total-price">
    Cart Total: <strong>{formattedTotalPrice}</strong>
</p>
</div>
)
}

/* OPTION 2: 
export default function Cart(props) {
    return (
    //To wrap around JSX code that should have access to a context value. It needs a special kind of child
    <CartContext.Consumer>{
        cartContxt => {
            const totalPrice = cartContxt.items.reduce((amount, item) => amount + item.price*item.quantity, 0)
            const formattedTotalPrice = `$${totalPrice.toFixed(2)}`
            return (
                <div id="cart">
        {cartContxt.items.length === 0 && <p>No items in Cart</p>}
        {cartContxt.items.length > 0 && (
        <ul id="cart-items">
            {cartContxt.items.map(item => {
                const formattedPrice = `$${item.price.toFixed(2)}`
                return (
                    <li key={item.id}>
                        <div>
                            <span>{item.name}</span>
                            <span>({formattedPrice})</span>
                        </div>
                        <div className="cart-item-actions">
                            <button onClick={() => props.onUpdateQuantity(item.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => props.onUpdateQuantity(item.id, 1)}>+</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )}
    <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
    </p>
    </div>
            )
        }
    }
    </CartContext.Consumer>
    )
    } */