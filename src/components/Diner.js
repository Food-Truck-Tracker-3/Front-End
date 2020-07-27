import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialFormValues = {
  username: "",
  password: "",
  currentLocation: "",
  favoriteTrucks: [],
}

export default function Diner() {
  const [eater, setEater] = useState(initialFormValues)
  const [search, setSearch] = useState("")
  const [trucks, setTrucks] = useState([])
  const [filteredTrucks, setFilteredTrucks] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setTrucks(res.data)
        console.log(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  // const filteredTrucks = trucks.filter(truck => {
  //   truck.name.toLowerCase().includes(search.toLowerCase())
  // })

  useEffect(() => {
    setFilteredTrucks(
      trucks.filter(truck => {
        truck.name.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [search, trucks])
  return (
    <div>
      <input type="text" placeholder="Search" onChange={ e => setSearch(e.target.value )}/>
    </div>
  )
} 