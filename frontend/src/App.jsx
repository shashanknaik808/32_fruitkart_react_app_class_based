import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Products from './components/products/Products';
import SignUp from './components/signup/SignUp';
import Cart from './components/cart/Cart';
import { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listcart: {
        cartItems: null,
        setCartItems: null
      }
    }
  }

  handleAddProduct(product) {
    const productExist = this.cartItems.find(item => {
      return item.id === product.id;
    });

    if (productExist) {
      this.setCartItems(this.cartItems.map(item => {
        return item.id === product.id ?
          { ...productExist, quantity: productExist.quantity + 1 } :
          item;
      }))
    }
    else {
      this.setCartItems([this.cartItems, { ...product, quantity: 1 }]);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Header cartItems={null} />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
