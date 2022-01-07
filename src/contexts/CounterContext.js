import React from 'react'

const CounterContext = React.createContext()

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

const initialState = {
  counter: 0
}

const CounterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        counter: state.counter - 1
      }
  }
}

const CounterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CounterReducer, initialState)
  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}

const useCounter = () => {
  const context = React.useContext(CounterContext)
  if (!context) {
    throw new Error('useCounter doit être utilisé dans un CounterProvider')
  }
  return context
}

export {
  CounterProvider,
  useCounter,
  actionTypes
}
