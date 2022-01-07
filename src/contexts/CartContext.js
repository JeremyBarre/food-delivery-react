import React from 'react'

const CartContext = React.createContext()

const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART'
}

const initialState = {
  cart: [],
  total: 0
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat([action.item]),
        total: state.cart.length > 0
          ? state.cart.reduce((prev, cur) => prev + cur.price, action.item.price)
          : action.item.price
      }
    default:
      throw new Error('Unhandled action type: ' + action.type)
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CartReducer, initialState)
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

const useCart = () => {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error('useCart doit être utilisé dans un CartProvider')
  }
  return context
}

export {
  CartProvider,
  useCart,
  actionTypes
}
