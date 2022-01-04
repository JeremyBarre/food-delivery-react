import { useEffect, useState } from 'react'
import RestaurantsList from '../components/RestaurantList'
import { getRestaurants } from '../services/Api'

function Restaurants () {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getRestaurants()
      setRestaurants(data)
      setLoading(false)
    }
    getData()
  }, [])

  if (loading) {
    return (
      <h1>Chargement ...</h1>
    )
  }

  return (
    <div>
      <h1>RESTAURANTS</h1>
      <RestaurantsList restaurants={restaurants} />
    </div>
  )
}

export default Restaurants
