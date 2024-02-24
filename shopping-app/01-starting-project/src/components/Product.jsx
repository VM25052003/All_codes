import { CartContext } from "../store/cart-context"
import { useContext } from "react"

export default function Product(props) {
    const cartContxt = useContext(CartContext)
    return (
    <article className="product">
        <img src={props.image} alt={props.title} />
        <div className="product-content">
            <div>
                <h3>{props.title}</h3>
                <p className="product-price">${props.price}</p>
                <p>{props.description}</p>
            </div>
            <p className="product-actions">
                {/* Remember to use props.onAddToCart instead of directly onAddToCart */}
                <button onClick={() => cartContxt.onAddToCart(props.id)}>Add to Cart</button>
            </p>
        </div>
    </article>
    )
}