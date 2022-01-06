import PlatListItem from './PlatListItem'

function PlatList (props) {
  const { plats } = props
  return (
    <div className='list-container'>
      {
        plats.map(plat => {
          return (
            <PlatListItem key={plat._id} plat={plat} />
          )
        })
      }
    </div>
  )
}

export default PlatList
