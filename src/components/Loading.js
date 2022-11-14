import React from 'react';
import { connect } from 'react-redux';

import img from '../loading-gif.gif'
let Loading = ({ loading }) => (
loading ?
<div style={{ textAlign: 'center' }}>
   <br></br>
   <img src={img} alt='loading' />
   <h1>Chargement ...</h1>
</div> :
null
);
const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;