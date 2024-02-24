import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

//Using uppercase here as value produced by createContext() is an object containing a react component. Can also pass an initial value that can be provided to multiple components, to wrap this context around components to lt them access those values. Can be any value, number, string, object etc
export const CartContext = createContext({
    items: [],
    //Dummy function, not get used, but for better auto-completion
    onAddToCart: () => {},
    onUpdateQuantity: () => {}
})

//Defining outside CartContextProvider, as this should not be recreated whenever component executes as won't need access to any value defined or updated in component. Accepts 2 parameters now, state received will be latest state snapshot of state managed by state reducer
function cartReducer(state, action){
    if(action.type === 'ADD_ITEM'){
        let newCart = [...state.items]
        //Find index
        let currentItemIdx = newCart.findIndex(p => p.id === action.payload)
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
            let newProduct = DUMMY_PRODUCTS.find(p => p.id === action.payload)
            newCart.push({
                id: action.payload,
                name: newProduct.title,
                price: newProduct.price,
                quantity: 1
            })
        }
        return {
            //Copying previous state could have been required not to lose any other value
            ...state, 
            items: newCart
        }
    }
    if(action.type === 'UPDATE_QUANTITY'){
    //Find updated items
    let newCart = [...state.items]
    //Find index of item to be added
    let currentItemIdx = newCart.findIndex(p => p.id === action.payload.productId)
    let newItem = {
        ...newCart[currentItemIdx]
    }
    //Update amount
    newItem.quantity += action.payload.amount
    //if less than 0, remove
    if(newItem.quantity <= 0) newCart.splice(currentItemIdx, 1)
    //Otherwise update item
    else newCart[currentItemIdx] = newItem
    return {
        ...state,
        items: newCart
    }
    }
    return state;
}

export function CartContxtProvider(props) {
    /*Avoided prop drilling using useContext hook, and state management (like state updating functions, are complex, as in each time we need snapshot of previous state to update current state), we can useReducer hook. Basically used to reduce complex -> simple values
    Reducer function triggered by dispatching values to produce a new state. Empty items[] is initial value for useReducer */
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        items: []
    })
   
    function updateQuantityHandler(productId, amount) {
    cartDispatch({
        type: 'UPDATE_QUANTITY',
        payload: {
            productId,
            amount
        }
    })
    }

    function addToCartHandler(productId) {
    cartDispatch({
        //Basically to differentiate diff. actions from each other
        type: 'ADD_ITEM',
        payload: productId
    })
    }

    const contxtValue = {
        items: cartState.items,
        onAddToCart: addToCartHandler,
        onUpdateQuantity: updateQuantityHandler
    }
//Using children props to wrap this CartContext provider with that value around any JSX code around any other component
    return <CartContext.Provider value={contxtValue}>{props.children}</CartContext.Provider>
}