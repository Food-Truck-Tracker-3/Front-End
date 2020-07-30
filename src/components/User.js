import React from 'react';
import Operator from './Operator/Operator';
import Diner from './Diner/Diner';

function User({user}) {
  if(user.role === "diner"){
    return(
      <Diner user={user}/>
    );
  } else{
    return(
      <Operator user={user}/>
    );
  };
};

export default User;