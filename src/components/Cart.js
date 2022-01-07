import Draggable from 'react-draggable'
import { useCart } from '../contexts/CartContext'

function Cart () {
  const { state } = useCart()
  return (
    <Draggable>
      <div style={{ position: 'absolute', width: 200, height: 500, backgroundColor: 'aquamarine' }}>
        <h1>Votre commande</h1>
        {state.cart.map(item => {
          return (
            <div key={item._id}>
              <h4>{item.nom}</h4>
              <h5>{item.price.toFixed(2)}€</h5>
            </div>
          )
        })}
        <h2>TOTAL : {state.total.toFixed(2)}€</h2>
      </div>
    </Draggable>
  )
}
export default Cart
