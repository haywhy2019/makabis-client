import React, { Component } from "react";
import CustomButton from "../Custom-button/Custom-button";

export default class Subscribeform extends Component {
  state = {
    email: "",
    emailError: ""
  };

handleInputChange = (event) => {
    this.setState({email: event.target.value})
}

validate = () => {
  let emailError = ""
if(!this.state.email.includes('@')){
  emailError = 'Invalid email'
}

if(emailError){
  this.setState({emailError})
  return false
}
return true
}

handleSubmit = (event) => {
event.preventDefault()
let isValid = this.validate()
if(isValid){
  console.log(this.state)
 this.setState({ emailError: '' })
}

}


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <input
            name="email"
            value={this.state.email}
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
          />
          <div>{this.state.emailError}</div>

          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </div>
    );
  }
}
