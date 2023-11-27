import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Products from './components/products/Products';
import SignUp from './components/signup/SignUp';
import Cart from './components/cart/Cart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listcart: {
        cartItems: [],
      },
    };

    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.handleCartClearence = this.handleCartClearence.bind(this);

  }

  handleAddProduct = (product) => {
    const { cartItems } = this.state.listcart;
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      this.setState({
        listcart: {
          cartItems: cartItems.map((item) =>
            item.id === product.id
              ? { ...productExist, quantity: productExist.quantity + 1 }
              : item
          ),
        },
      });
    } else {
      this.setState({
        listcart: {
          cartItems: [...cartItems, { ...product, quantity: 1 }],
        },
      });
    }
  };

  handleRemoveProduct = (product) => {
    const { cartItems } = this.state.listcart;
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist.quantity === 1) {
      this.setState({
        listcart: {
          cartItems: cartItems.filter((item) => item.id !== product.id),
        },
      });
    } else {
      this.setState({
        listcart: {
          cartItems: cartItems.map((item) =>
            item.id === product.id
              ? { ...productExist, quantity: productExist.quantity - 1 }
              : item
          ),
        },
      });
    }
  };

  handleCartClearence = () => {
    this.setState({
      listcart: {
        cartItems: [],
      },
    });
  };

  render() {
    const { cartItems } = this.state.listcart;

    return (
      <div>
        <BrowserRouter>
          <Header cartItems={cartItems} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Products handleAddProduct={this.handleAddProduct} />}
            />
            <Route exact path="/signup" element={<SignUp />} />
            <Route
              exact
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  handleAddProduct={this.handleAddProduct}
                  handleRemoveProduct={this.handleRemoveProduct}
                  handleCartClearence={this.handleCartClearence}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
