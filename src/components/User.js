import React, { useEffect } from 'react';
import {connect} from "react-redux";
import AddTruck from './Operator/AddTruck';
import TruckList from "./Operator/TruckList";
import {fetchTrucks, addTruck} from "../store/actions";



function User(props) {
  

  return (
    <div>
      <h1>{props.data.username}</h1>
      <p>Your Food Trucks</p>
      <TruckList fetchTrucks={props.fetchTrucks}/>
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
mapStateToProps, {fetchTrucks, addTruck}
)(User);