import React from 'react'
import {connect} from "react-redux";
import Truck from './Truck'
import AddTruck from './AddTruck'



function Operator(props) {
  

 

  return (
    <div>
      <h1>{props.userInfo.data.username}</h1>
      <p>Your Food Trucks</p>
      {/* list of owned trucks */}
      <TruckList/>
      <AddTruck />
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
)(Operator);