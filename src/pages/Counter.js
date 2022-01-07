import { CounterProvider, useCounter, actionTypes } from '../contexts/CounterContext'

function Counter () {
  return (
    <div>
      <CounterProvider>
        <CounterValue />
        <CounterAction />
      </CounterProvider>
    </div>
  )
}

function CounterValue () {
  const { state } = useCounter()
  return (
    <h1>Valeur du compteur : {state.counter}</h1>
  )
}

function CounterAction () {
  const { dispatch } = useCounter()
  return (
    <div>
      <button onClick={() => dispatch({ type: actionTypes.DECREMENT })}> - </button><br />
      <button onClick={() => dispatch({ type: actionTypes.INCREMENT })}> + </button>
    </div>
  )
}

export default Counter
