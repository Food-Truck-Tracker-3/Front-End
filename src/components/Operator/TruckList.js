import React, { useState, useEffect } from 'react'
import Truck from './Truck'
import axios from 'axios'
import Header from '../Header'
import '../components.css'

// const initialValuesForm = {
//   operator_id: "",
//   name: "",
//   description: "",
//   cuisine: "",
//   city: "",
//   hours: "",
// }
export default function TruckList() {
  // const [ownedTrucks, setOwnedTrucks] = useState(initialValuesForm)
  const [trucks, setTrucks] = useState([])

  useEffect(() => {
    axios.get('https://foodtruck-backend-3.herokuapp.com/api/galo')
      .then(res => {
        setTrucks(res.data.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err, 'uh oh')
      })
  }, [])


  console.log(trucks)

  return (
    <div>
      <Header />
      <div className='truck-list-container'>
        {trucks.map((truck, index) => {
          return (
            <Truck key={index} details={truck} />
          )
        })}
      </div>
    </div>
  )
  // return null
}