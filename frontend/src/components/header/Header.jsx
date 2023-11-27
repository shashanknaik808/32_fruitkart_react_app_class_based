import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div>
                    <h1>
                        <Link to='/' className='logo'>
                            Fruit Kart
                        </Link>
                    </h1>
                </div>
                <div className='header-links'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <i className="fa-solid fa-house"></i>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/signup">SignUp</Link>
                            <i className="fa-solid fa-right-to-bracket"></i>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/cart" className='cart'>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                                <span className='cart-length'>

                                </span>
                            </Link>
                        </li>
                    </ul>

                </div>
            </header>
        )
    }
}