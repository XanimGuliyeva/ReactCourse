import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" >
          <NavbarBrand  href="/">Northwind app</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto"  navbar>
              <NavItem>
                <NavLink id="RouterNavLink"  href="/form1">Form Demo 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="RouterNavLink"  href="/form2">Form Demo 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
                <CartSummary removeFromCard={this.props.removeFromCard} cart={this.props.cart}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}