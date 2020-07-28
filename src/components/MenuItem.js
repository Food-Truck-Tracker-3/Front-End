import React, { useState } from 'react'

const initialFormValues = {
  itemName: "",
  itemDescription: "",
  itemPhoto: [],
  itemPrice: Number,
  customerRatings: [],
  customerRatingsAvg: Number
}

export default function MenuItem() {
  const [menuItem, setMenuItem] = useState(initialFormValues)

  return null
}