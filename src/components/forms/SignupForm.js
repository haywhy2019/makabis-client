import React, { Component } from 'react';
import CustomButton from '../Custom-button/Custom-button'

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmpassword: '',
  firstnameError: '',
  lastnameError: '',
  emailError: '',
  passwordError: '',
  confirmpasswordError: ''
}
 class SignupForm extends Component {
  constructor(props){
    super(props);
    this.state = initialState
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  validate = () => {
 let firstnameError = '';
 let lastnameError = '';
 let emailError = '';
 let passwordError = '';
 let confirmpasswordError = ''

  if(!this.state.firstname){
    firstnameError = "Firstame can't be blank"
  }
  if(!this.state.lastname){
    lastnameError = "Lastname can't be blank"
  }
  if(!this.state.email.includes("@")){
    emailError = "Invalid email"
  }
  if(!this.state.password || !this.state.confirmpassword){
    passwordError = "please fill most password"
  }
  if(this.state.password !== this.state.confirmpassword){
    confirmpasswordError = "Passwords don't match"
  }
  if(firstnameError || lastnameError || emailError || passwordError || confirmpasswordError) {
    this.setState({firstnameError, lastnameError, emailError, passwordError, confirmpasswordError })
    return false
  }
  return true;

  };

  handleSubmit = event => {
    event.preventDefault();
   const isValid = this.validate()
   if(isValid){
    console.log(this.state)
    this.setState(initialState)
   }
   
  }


  render() {
    return (
      <div>
          <h2>SignUp </h2>
      <span>Fill the form below</span>
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label >Firstname</label>
            <input
            name ='firstname'
            value = {this.state.firstname}
              type="text"
              className="form-control"
              placeholder="John"
              onChange={this.handleInputChange }
            />
            <div>{this.state.firstnameError}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label >Lastname</label>
            <input
               name ='lastname'
               value = {this.state.lastname}
              type="text"
              className="form-control"
              placeholder="John"
              onChange={this.handleInputChange }
            />
              <div>{this.state.lastnameError}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label>Email</label>
            <input
               name ='email'
               value = {this.state.email}
              type="email"
              className="form-control"
              placeholder="John@email.com"
              onChange={this.handleInputChange }
            />
              <div>{this.state.emailError}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label>Password</label>
            <input
               name ='password'
               value = {this.state.password}
              type="password"
              className="form-control"
              onChange={this.handleInputChange }
            />
              <div>{this.state.passwordError}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label> Confirm Password</label>
            <input
               name ='confirmpassword'
               value = {this.state.confirmpassword}
              type="password"
              className="form-control"
              onChange={this.handleInputChange }
            />
              <div>{this.state.confirmpasswordError}</div>
          </div>
     <CustomButton type='submit'>
       Submit
     </CustomButton>
        </div>
      </form>
      </div>
    )
  }
}

export default SignupForm