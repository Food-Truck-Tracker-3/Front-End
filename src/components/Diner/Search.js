import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Truck from '../Operator/Truck'
import '../components.css'



export default function Search() {
  const [search, setSearch] = useState("")
  const [trucks, setTrucks] = useState([])
  const [filteredTrucks, setFilteredTrucks] = useState([])


  useEffect(() => {
    axios.get('https://foodtruck-backend-3.herokuapp.com/api/galo')
      .then(res => {
        setTrucks(res.data.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  useEffect(() => {
    setFilteredTrucks(
      trucks.filter(truck => {
        return truck.name.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [trucks, search])

  return (
    <div className='search-container'>
      <input type="text" id="search-bar" placeholder="Search" onChange={e => setSearch(e.target.value)} />
      <div className='truck-list-container'>
      {filteredTrucks.map((truck, index) => {
        return (<Truck key={index} details={truck}  />
        )        
      })
      }
      </div>
    </div>
  )
} 

