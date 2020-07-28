import React from 'react'
import MenuItem from './MenuItem'
import CommentList from './CommentList'

export default function Truck(props) {
  const {
    truck,
    saved
  } = props
  if (!truck) {
    return <h3>Working fetching your Truck&apos;s details...</h3>
  }

  // const saveTruck = () => {

  // }

  return (
    <div className='friend container' onChange={saved}>
      <h2>{truck.name}</h2>
      <p>{truck.status}</p>
      <p>{truck.gender}</p>
      {/* <h2>{details.name}</h2>
      <p>{details.imageOfTruck}</p>
      <p>{details.cuisineType}</p>
      <p>{details.customerRating}</p>
      <p>{details.menu}</p>
      <p>{details.currentLocation.location}</p>
      <p>{details.currentLocation.departureTime}</p> */}
      <MenuItem />
      <CommentList />
    </div>
  )
}
