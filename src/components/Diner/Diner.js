import React from 'react'
import {connect} from "react-redux";

import TruckList from '../Operator/TruckList';



function Diner(props) {
  

 

  return (
    <div className='diner-container'>
      <h1>{props.userInfo.data.username}</h1>
      <p>Your Food Trucks</p>

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