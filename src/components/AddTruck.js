import React, { useState } from 'react'

const initialFormsValue = {
  imageOfTruck: "",
  cuisineType: ""
}

export default function AddTruck() {
  const [favoriteTrucks, setFavoriteTrucks] = useState(initialFormsValue)
  const [savedTruck, setSavedTruck] = useState("")

  const addTruck = event => {
    event.preventDefault();
    setFavoriteTrucks([
      ...favoriteTrucks,
      {
        id: favoriteTrucks.length,
        name: savedTruck
      }
    ]);
    setSavedTruck("")
  }

  return (
    <div onChange={addTruck}>
      <button>Save</button>
    </div>
  )
}