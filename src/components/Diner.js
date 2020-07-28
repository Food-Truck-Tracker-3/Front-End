import React, { useState } from 'react'
import styled from 'styled-components'
import Search from './Search'

const initialFormsValue = {
  username: "",
  password: "",
  currentLocation: "",
  favoriteTrucks: []
}

const WrapperDiv = styled.div`
  background-color: #FEF6DA;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  h1 {
    font-size: 1.4rem;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .search-container {
    display: flex;
    
  }
`

export default function Diner() {
  const [diner, setDiner] = useState(initialFormsValue)

  return (
    <WrapperDiv>
      <div className='text-container'>
        <h1>Welcome (placeholder name)!</h1>
        <p>Find your favorite food truck</p>
      </div>
      <div className='search-container'>
        <Search />
      </div>
      {/* list of favorite trucks */}

    </WrapperDiv>
  )
}