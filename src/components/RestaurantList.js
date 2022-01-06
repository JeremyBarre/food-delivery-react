import RestaurantsListItem from './RestaurantListItem'
import './styles/RestaurantListStyle.css'

function RestaurantsList (props) {
  const { restaurants } = props
  // const restaurants = props.restaurants
  return (
    <div className='list_container'>
      {restaurants.map(restaurant => {
        return (
          <RestaurantsListItem key={restaurant._id} restaurant={restaurant} />
        )
      })}
    </div>
  )
}

export default RestaurantsList
