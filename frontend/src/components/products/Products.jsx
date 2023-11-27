import React, { Component } from 'react';
import './Products.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setProducts: {
                flag: false,
                productsList: null,
            },
        };
    }

    async componentDidMount() {
        await this.getData();
    }

    async getData() {
        let backend_url = 'http://localhost:3300/products';
        let response = await fetch(backend_url);
        if (response.ok) {
            let responseData = await response.json();
            this.setState({
                setProducts: { flag: true, productsList: responseData['productItems'] },
            });
        } else {
            console.log('error');
        }
    }

    sortAlphabetAscending = () => {
        let { productsList } = this.state.setProducts;
        let sorted = [...productsList].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
        this.setState({ setProducts: { ...this.state.setProducts, productsList: sorted } });
    };


    render() {
        const { flag, productsList } = this.state.setProducts;
        const { handleAddProduct } = this.props;

        return (
            flag ? (
                <div className='products-container'>

                    <div className="sort-button">
                        <DropdownButton variant="success" title="Sort By ">
                            <Dropdown.Item eventKey="1" onClick={this.sortAlphabetAscending}>A -to- Z</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={null}>Z -to- A</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3" onClick={null}>High to Low</Dropdown.Item>
                            <Dropdown.Item eventKey="4" onClick={null}>Low to High</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <div className='products'>
                        {productsList.map((item) => (
                            <div className='card' key={item.name}>
                                <div>
                                    <img className='product-image' src={item.image} alt={item.image} />
                                </div>
                                <div>
                                    <h2 className='product-name'>{item.name}</h2>
                                </div>
                                <div className='product-price'>
                                    {item.price}/-
                                </div>
                                <div>
                                    <button
                                        className='product-add-button'
                                        onClick={() => handleAddProduct(item)}>Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div><h1>Loading..!!</h1></div>
            )
        );
    }
}
