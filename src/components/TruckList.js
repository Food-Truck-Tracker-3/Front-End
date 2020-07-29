import React, { useState, useEffect } from 'react'
import Truck from './Truck'
import axios from 'axios'

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
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setTrucks(res.data.results)
        console.log(res.data.results)
      })
      .catch(err => {
        console.log(err, 'uh oh')
      })
  }, [])


  // console.log(trucks.data.results)

  return (
    <div className='truck-list-container'>
      {trucks.map((truck, index) => {
        return (
          <Truck key={index} details={truck} />
        )
      })}
    </div>
  )
}