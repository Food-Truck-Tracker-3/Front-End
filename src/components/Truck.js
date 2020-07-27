import React from 'react'

export default function Truck({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.name}</h2>
      <p>Email: {details.status}</p>
      <p>Role: {details.gender}</p>
    </div>
  )
}
