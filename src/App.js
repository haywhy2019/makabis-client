import React, {Component} from "react";
import './App.scss'

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Service from './pages/Services/Services';
import Impression from './pages/Impression/Impression';
import Signin from './pages/signin-and-signup/signin';
import Signup from './pages/signin-and-signup/Signup';


// import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions' 



class App extends Component{
 
 render(){
  return (
    <div className="">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Service} />
          <Route path="/contact" component={Contact} />
          <Route path="/impression" component={Impression} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' /> ) : (<Signin />)} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
 }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
 setCurrentUser: user => dispatch(setCurrentUser(user))
})

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
