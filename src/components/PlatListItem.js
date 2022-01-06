function PlatListItem (props) {
  const { plat } = props
  return (
    <div className='card'>
      <img className='card-img' src={plat.photos[0] ? `${process.env.REACT_APP_API_URL}${plat.photos[0].url}` : 'https://via.placeholder.com/200'} />
      <h1>{plat.nom}</h1>
      <p>{plat.description}</p>
      <h4>{plat.price.toFixed(2)}€</h4>
    </div>
  )
}

export default PlatListItem
