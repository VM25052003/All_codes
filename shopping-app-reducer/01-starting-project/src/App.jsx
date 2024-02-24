import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product";
import { DUMMY_PRODUCTS } from "./dummy-products";
import { CartContxtProvider } from "../src/store/cart-context"

function App() {
    return (
//Default value set is only accessed if a component not wrapped by Provider component tries to access context value. Here both the Header and Shop components are descendants of the CartContext.Provider, so they will be able to access the cart value directly from the context without relying on default values.
        <CartContxtProvider>
        <Header />
        {/* <Shop onAddToCart={addToCartHandler}/> */}
        {/* OPTION 1 to ignore prop drilling */}
        <Shop>
            {DUMMY_PRODUCTS.map(product => (
                    <li key={product.id}>
                        <Product {...product}/>
                    </li>
            ))}
        </Shop>
        </CartContxtProvider>
    )
}
export default App