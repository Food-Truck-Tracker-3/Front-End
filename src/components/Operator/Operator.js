import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import TruckList from './TruckList';
import '../components.css';



function Operator(props) {

  const [truckList, setTruckList] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
            .get("/api/operators/trucks")
            .then(res => {
                console.log(res);
                setTruckList(res.data);
            })
            .catch(err => console.log(err));
  });

  return (
    <div className='operator-container'>
      <p>Username: {props.user.username}</p>
      <p>Account type: {props.user.role}</p>
      <TruckList 
        userId={props.user.id} 
        truckList={truckList} 
        setTruckList={setTruckList}/>
    </div>
  );
};


export default Operator;

