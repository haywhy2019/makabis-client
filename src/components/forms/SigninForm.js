import React, { Component} from "react";
import CustomButton from '../Custom-button/Custom-button'

const initialState = {
    username: '',
    password: '',
    usernameError: '',
    passwordError: ''
  
}

 class SigninForm extends Component {
   constructor(props){
     super(props)
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
   let usernameError = '';
   let passwordError = ''

   if(!this.state.username) {
     usernameError = 'username cannot be blank'
   }
   if(usernameError){
    this.setState({usernameError})
    return false
  }
   if(!this.state.password){
    passwordError = 'password cannot be blank'
  }
  
   if(passwordError){
    this.setState({passwordError})
    return false
  }

   return true
   

  }

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      console.log(this.state)
      this.setState(initialState)

    }
  }

  render() {
    return (
      <div>
      
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with username and password</span>
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor='username'>Username</label>
            <input
            name='username'
            value={this.state.username}
              type="text"
              className="form-control"
              id="username"
             placeholder="John"
              onChange={this.handleInputChange}
            />
            <div>{this.state.usernameError}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor='password'>Password</label>
            <input
            name='password'
              type="password"
              value={this.state.password}
              className="form-control"
              id="password"
             placeholder="password"
              onChange={this.handleInputChange}
            />
            <div>{this.state.passwordError}</div>
          </div>
        <CustomButton type='submit'>
          Submit
        </CustomButton>
        </div>
      </form>
    </div>
      </div>
    )
  }
}
export default SigninForm