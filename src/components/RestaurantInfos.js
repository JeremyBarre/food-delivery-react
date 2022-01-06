import PlatList from './PlatList'
import RestaurantAddress from './RestaurantAddress'
import './styles/RestaurantInfosStyles.css'

function RestaurantInfos (props) {
  const { restaurant } = props
  return (
    <div>
      <div className='infos-container'>
        <div className='col'>
          <h1>{restaurant.title}</h1>
          <img className='card_img' src={`${process.env.REACT_APP_API_URL}${restaurant.photos[0].url}`} />
          <p>{restaurant.description}</p>
        </div>
        <div className='col'>
          <RestaurantAddress adresse={restaurant.adresse} />
        </div>
      </div>
      <div>
        <PlatList key={restaurant._id} plats={restaurant.plats} />
      </div>
    </div>
  )
}
export default RestaurantInfos
