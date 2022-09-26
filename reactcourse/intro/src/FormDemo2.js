import React, { Component } from "react";
import { Form, FormGroup, Label,Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!");
    alertify.success(this.state.password + " added to db!");
    alertify.success(this.state.city + " added to db!");
    alertify.success(this.state.description + " added to db!");

  };
  render() {
    return (
      <div>
        <br/>   
        <Form onSubmit={this.handleSubmit}> 
          <FormGroup>
            <Label for="email">Email</Label> <br/>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label> <br/>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label> <br/>
            <Input
              type="text"
              name="description"
              id="description"
              placeholder="Enter your description"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label> <br/>
            <Input
              type="select"
              name="city"
              id="city"
              placeholder="Enter your city"
              onChange={this.handleChange}>
                <option>Baku</option>
                <option>Ganja</option>
                <option>Mingachevir</option>
              </Input>
          </FormGroup>
            <input type="submit" value="Save"></input>
        </Form>
      </div>
    );
  }
}
