import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Truck from './Truck'
import styled from 'styled-components'



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
  //needs to target correct data

  useEffect(() => {
    setFilteredTrucks(
      trucks.filter(truck => {
        return truck.name.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [trucks, search])

  return (
    <StyledSearchBar>
      <input type="text" id="search-bar" placeholder="Search" onChange={e => setSearch(e.target.value)} />
      {filteredTrucks.map((truck, index) => {
        return (<Truck key={index} details={truck}  />
        )        
      })
      }
    </StyledSearchBar>
  )
} 

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  #search-bar {
    display: flex;
    flex-wrap: wrap;
  }
`