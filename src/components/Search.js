import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Truck from './Truck'



export default function Search() {
  const [search, setSearch] = useState("")
  const [trucks, setTrucks] = useState([])
  const [filteredTrucks, setFilteredTrucks] = useState([])


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setTrucks(res.data.results)
      })
      .catch(err => {
        debugger
      })
  }, [])
  // console.log(trucks.data)//needs to target correct data

  useEffect(() => {
    setFilteredTrucks(
      trucks.filter(truck => {
        return truck.name.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [search, trucks])

  return (
    <div>
      <input type="text" placeholder="Search" onChange={e => setSearch(e.target.value)} />
      {filteredTrucks.map((truck, index) => {
        return (<Truck key={index} details={truck}  />
        )        
      })
      }
    </div>
  )
} 