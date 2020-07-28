import React, { useState } from 'react'
import TruckList from './TruckList'
import AddTruck from './AddTruck'

const initialFormsValue = {
  username: "",
  password: "",
  trucksOwned: [],
}

export default function Operator() {
  const [user, setUser] = useState(initialFormsValue)
  return (
    <div>
      <h1>Welcome (placeholder name)!</h1>
      <p>Your Food Trucks</p>
      {/* list of owned trucks */}
      <TruckList/>
      <AddTruck />
    </div>
  )
}