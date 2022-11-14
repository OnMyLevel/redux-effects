import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

let Button=({getUsers})=>(
   <button onClick={getUsers}>Press to see user</button>
)

const mapDispatchToProps = {
     getUsers: getUsers,
};

Button = connect(null,mapDispatchToProps)(Button);
export default Button;