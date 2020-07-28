import React, { useState, useEffect } from 'react'
import Truck from './Truck'
import axios from 'axios'
import Search from './Search'


const initialValuesForm = {
  imageOfTruck: "",
  cuisineType: "",
  customerRatings: "",
  customerRatingsAvg: Number,
  menu: [],
  currentLocation: {
    location: "",
    departureTime: "",
  }
}
export default function TruckList() {
  const [ownedTrucks, setOwnedTrucks] = useState(initialValuesForm)
  const [trucks, setTrucks] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setTrucks(res.data.results)
      })
      .catch(err => {
        debugger
      })
  }, [])

  console.log(trucks)

  return (
    <div>
      {trucks.map((truck, index) => {
        return (
          <Truck key={index} truck={truck} />
        )
      })}
      <Search />
    </div>
  )
}