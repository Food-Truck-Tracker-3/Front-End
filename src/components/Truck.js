import React from 'react'
import MenuItem from './MenuItem'
import SaveFavorite from './Favorite'


export default function Truck(props) {
  const {
    details,
    saved
  } = props
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  // const saveTruck = () => {

  // }

  return (
    <div className='friend container' onChange={saved}>
      <h2>{details.name}</h2>
      <p>{details.status}</p>
      <p>{details.gender}</p>
      {/* <h2>{details.name}</h2>
      <p>{details.imageOfTruck}</p>
      <p>{details.cuisineType}</p>
      <p>{details.customerRating}</p>
      <p>{details.menu}</p>
      <p>{details.currentLocation.location}</p>
      <p>{details.currentLocation.departureTime}</p> */}
      <MenuItem />

      <SaveFavorite />


    </div>
  )
}
