import React, { useState } from 'react'

import axios from 'axios'

//const initialFormValues = {
 // itemName: "",
 // itemDescription: "",
 // itemPhoto: [],
 // itemPrice: Number,
 // customerRatings: [],
 // customerRatingsAvg: Number
//}

export default function MenuItem(props) {
  
  //const [menuItem] = useState([])

  //const newMenu = {
   // name: menuItem.name,
   // description: menuItem.description,
   // photo: menuItem.photo,
   // price: menuItem.price,
   // rating: menuItem.rating,
   // ratingAvg: menuItem.ratingAvg
   // }
console.log(props)
return (<div>{props.menuItem.name}</div>)
}