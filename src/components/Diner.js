import React from 'react'
import {connect} from "react-redux";




function Diner(props) {
  

 

  return (
    <div>
      <h1>{props.userInfo.username}</h1>
      <p>Your Food Trucks</p>
      
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