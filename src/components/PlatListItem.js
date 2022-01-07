import { actionTypes, useCart } from '../contexts/CartContext'

function PlatListItem (props) {
  const { plat } = props
  const { dispatch } = useCart()
  return (
    <div className='card'>
      <img className='card-img' src={plat.photos[0] ? `${process.env.REACT_APP_API_URL}${plat.photos[0].url}` : 'https://via.placeholder.com/200'} />
      <h1>{plat.nom}</h1>
      <p>{plat.description}</p>
      <h4>{plat.price.toFixed(2)}€</h4>
      <button onClick={() => dispatch({ type: actionTypes.ADD_TO_CART, item: plat })}>Ajouter au panier</button>
    </div>
  )
}

export default PlatListItem
