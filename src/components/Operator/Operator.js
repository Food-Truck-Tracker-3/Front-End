import React, { useEffect } from 'react'
import {connect} from "react-redux";
import AddTruck from './AddTruck'
import EditTruck from "./EditTruck";
import Truck from "./Truck";
import {fetchTrucks, addTruck, editTruck, deleteTruck} from "../../store/actions";



function Operator(props) {
  

  useEffect(() => {
    props.fetchTrucks();
  });

  return (
    <div>
      <h1>{props.data.data.username}</h1>
      <p>Your Food Trucks</p>
      {props.data.length > 0 && props.data.map(truck => (
        <Truck key={truck.name} truck={truck} editTruck={props.editTruck} deleteTruck={props.deleteTruck}/>
      ))}
      <AddTruck addTruck={props.addTruck} />
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    data: state.data,
    error: state.error
  };
};

export default connect(
mapStateToProps, {fetchTrucks, addTruck, editTruck, deleteTruck}
)(Operator);