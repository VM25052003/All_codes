import { createContext, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

//Using uppercase here as value produced by createContext() is an object containing a react component. Can also pass an initial value that can be provided to multiple components, to wrap this context around components to lt them access those values. Can be any value, number, string, object etc
export const CartContext = createContext({
    items: [],
    //Dummy function, not get used, but for better auto-completion
    onAddToCart: () => {},
    onUpdateQuantity: () => {}
})

export function CartContxtProvider(props) {
    const [cart, setCart] = useState({
        items: []
    })
    function updateQuantityHandler(productId, amount) {
    setCart(prevCart => {
    //Find updated items
    let newCart = [...prevCart.items]
    //Find index of item to be added
    let currentItemIdx = newCart.findIndex(p => p.id === productId)
    let newItem = {
        ...newCart[currentItemIdx]
    }
    //Update amount
    newItem.quantity += amount
    //if less than 0, remove
    if(newItem.quantity <= 0) newCart.splice(currentItemIdx, 1)
    //Otherwise update item
    else newCart[currentItemIdx] = newItem
    return {
        items: newCart
    }
    })
    }

    function addToCartHandler(productId) {
    setCart(prevCart => {
        let newCart = [...prevCart.items]
        //Find index
        let currentItemIdx = newCart.findIndex(p => p.id === productId)
        //Find item on basis of index
        let currentItem = newCart[currentItemIdx]
        //If already exist in cart
        if(currentItem){
            let newItem = {
                ...currentItem,
                quantity: currentItem.quantity + 1
            }
            newCart[currentItemIdx] = newItem
        }
        //If not
        else {
            let newProduct = DUMMY_PRODUCTS.find(p => p.id === productId)
            newCart.push({
                id: productId,
                name: newProduct.title,
                price: newProduct.price,
                quantity: 1
            })
        }
        return {
            items: newCart
        }
    })    
    }
    const contxtValue = {
        items: cart.items,
        onAddToCart: addToCartHandler,
        onUpdateQuantity: updateQuantityHandler
    }
//Using children props to wrap this CartContext provider with that value around any JSX code around any other component
    return <CartContext.Provider value={contxtValue}>{props.children}</CartContext.Provider>
}