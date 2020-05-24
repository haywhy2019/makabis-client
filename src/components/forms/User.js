import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

 function User({ currentUser }) {
  return (
    <div>
      { currentUser ? <div>Signout</div> : <Link to="/signin">Signin</Link> }
    </div>
  );
} 

const mapStateToProps = state => ({
 currentUser: state.user.currentUser
})



export default connect(mapStateToProps)(User);