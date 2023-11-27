import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Products from './components/products/Products';
import SignUp from './components/signup/SignUp';
import Cart from './components/cart/Cart';
import { Component } from 'react';

export default class App extends Component {
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
