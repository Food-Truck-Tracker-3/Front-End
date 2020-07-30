import React from 'react'
// import {connect} from "react-redux";

function Diner({user}) {
  return (
    <div className='diner-container'>
      <h1>{user.username}</h1>
      <p>Your Favorite Trucks</p>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     isLoading: state.isLoading,
//     data: state.data,
//     error: state.error
//   };
// };

// export default connect(
// mapStateToProps, {}
// )(Diner);

export default Diner;