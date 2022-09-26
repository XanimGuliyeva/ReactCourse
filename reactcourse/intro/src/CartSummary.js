import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge, 
    NavItem,
    NavLink
} from 'reactstrap';

export default class CartSummary extends Component {

    renderSummary(){
        return(
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Your cart
                </DropdownToggle>
                <DropdownMenu>
                    {
                        this.props.cart.map(cartItem=>(
                            <DropdownItem 
                                key={cartItem.product.id}>
                                <Badge color='danger' onClick={()=>this.props.removeFromCard(cartItem.product)}>X</Badge>
                                {cartItem.product.productName} 
                                <Badge color='success'>{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))}
                  
                  <DropdownItem divider />
                  <DropdownItem>
                     <Link to="cart">To Cart</Link>
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    renderEmptyCart(){
        return(
            <NavItem>
            <NavLink>Empty Cart</NavLink>
        </NavItem>
        )
    }

  render() {
    return (
      <div>
            {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
      </div>
    )
  }
}