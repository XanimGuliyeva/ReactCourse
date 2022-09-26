import React, { Component } from 'react'
import alertify from 'alertifyjs';
export default class FormDemo1 extends Component {
    state ={
        userName:'',city:''
    }
    onChangeHandler = (event) =>{
        // this.setState({userName: event.target.value})
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
    }
    onSubmitHandler= (event) =>{
        event.preventDefault();
        alertify.success(this.state.email + " added to db!");
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>User name</h3>
            <input name="userName" onChange={this.onChangeHandler} type="text"></input>
            <h3>User name is {this.state.userName}</h3>

            <h3>City</h3>
            <input name="city" onChange={this.onChangeHandler} type="text"></input>
            <h3>City name is {this.state.city}</h3>

            <input type="submit" value="Save"></input>
        </form>
      </div>
    )
  }
}
