import React, { useState } from 'react'
import Search from './Search'

const initialFormsValue = {
  username: "",
  password: "",
  currentLocation: "",
  favoriteTrucks: []
}

export default function Diner() {
  const [diner, setDiner] = useState(initialFormsValue)
  
  return (
    <div>
      <h1>Welcome (placeholder name)!</h1>
      <p>Find your favorite food truck</p>
      {/* <Search /> */}
      {/* list of favorite trucks */}
    </div>
  )
}