import { createContext, useReducer } from "react"
import CartReducer from "./CartReducer"

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const initialState = {
        items: [],
        total: 0
    }

    const [state, dispatch] = useReducer (CartReducer, initialState)

    return <CartContext.Provider value={{...state, dispatcher:dispatch}}>
        {children}
    </CartContext.Provider>
}

export default CartContext
