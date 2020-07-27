import React from 'react'

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
      <button onClick={() => saved}>Save</button>
    </div>
  )
}
