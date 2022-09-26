import React, { Component } from 'react'
import Category from "./Category";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';


export default class App extends Component {

  state={currentCategory:"",products:[],cart:[]}

  changeCategory = (category) =>{
    this.setState({currentCategory:category.categoryName});
    this.getProducts(category.id);
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts = (categoryId) =>{
    let url = "http://localhost:3000/products";
    if(categoryId){
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}))
  }

  addtoCard =(product)=>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(c=>c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }
    else {
      newCart.push({product:product,quantity:1});
    }
    this.setState({cart:newCart})
    alertify.success(product.productName + "  added to Cart!");
  }

  removeFromCard =(product)=>{
    let newCart = this.state.cart.filter(c=>c.product.id!==product.id);
    this.setState({cart:newCart});
    alertify.error(product.productName + " removed  from cart!");
  }

 render(){
  let categoryInfo = {title:"Category List"};
  let productInfo = {title:"Product List"}
  return (
    <div >
      <Container>

      <Navi removeFromCard={this.removeFromCard} cart={this.state.cart}/>

          <Row>
            <Col xs="3">
              <Category 
                currentCategory={this.state.currentCategory} 
                changeCategory={this.changeCategory} 
                info={categoryInfo}/>
              </Col>
            <Col xs="9" >

                <Routes>
                    <Route path="/"  exact render={props=>(
                      <ProductList 
                              {...props}
                              products={this.state.products} 
                              addtoCard={this.addtoCard}
                              currentCategory={this.state.currentCategory} 
                              info={productInfo} 
                            />
                    )}/>  
                    <Route path="cart" exact render={props=>(
                      <CartList 
                              {...props}
                              cart={this.state.cart} 
                              removeFromCard={this.removeFromCard}
                            />
                    )} /> 
                    <Route path="/form1" element={<FormDemo1/>} />
                    <Route path="/form2" element={<FormDemo2/>} />
                    <Route path="*" element={<NotFound/>} />
                  </Routes>        
              </Col>
          </Row>

      </Container>
    </div>
  );
 }
}


