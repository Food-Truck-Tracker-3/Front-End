import axios from 'axios'
import MenuItem from './MenuItem'
import React, { useEffect, useState } from 'react'


 const Menu = (props) => {
   
    var A = [{
        name: 'name',
        description: 'description',
       
        price: 'number',
        }]
    const [menuItem, setMenuItem] = useState(A)

    console.log(menuItem)

    useEffect(() => {
        
        axios.get('https://reqres.in/api/users')
          .then(res => {
            setMenuItem(menuItem,...res)
            console.log(res)
          })
          .catch(err => {
            console.log(err, 'ERROR')
          })
      }, [])
    
      return (
        <div>
          {menuItem.map((menu, index) => 
      
        <MenuItem key={index} menuItem={menu} />
          )}
  </div>
      )}
       
    export default Menu;