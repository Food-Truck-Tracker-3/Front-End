import React from 'react'
import {connect} from "react-redux";
import Truck from './Truck'
import TruckList from './TruckList';



function Diner(props) {
  

 

  return (
    <div className='diner-container'>
      {/* <h1>{props.userInfo.username}</h1> */}
      <p>Your Food Trucks</p>
      <Truck />
      <TruckList />
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    userInfo: state.userInfo,
    error: state.error
  };
};

export default connect(
mapStateToProps, {}
)(Diner);