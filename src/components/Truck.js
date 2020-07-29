import React from 'react'
import MenuItem from './MenuItem'
import CommentForm from './CommentForm'
import styled from 'styled-components'
import './components.css'
import './components.css'

export default function Truck(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching Truck&apos;s details...</h3>
  }

  // const savedetails = () => {

  // }
console.log(details.name)
  return (
    <div className='truck-container'>
      <div>
      <p>{details.name}</p>
      <p>{details.description}</p>
      <p>{details.cuisine}</p>
      <p>{details.city}</p>
      <p>{details.hours}</p>
      {/* <MenuItem />
      <CommentForm /> */}
      </div>
    </div>
  )
}

// const StyledTruckContainer = styled.div`
//   display: flex;
//   align-items: center;
// `