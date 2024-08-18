
import React, { Component } from "react";
import Product from './Product';
import Social from './Social';
import CartProduct from './CartProduct';
import './style.css';


export default class Shop extends Component {
    constructor() {
        super()
        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 12, img: './img/Album-1.png', count: 1 },
                { id: 2, title: 'Album 2', price: 21, img: './img/Album-2.png', count: 1 },
                { id: 3, title: 'Album 3', price: 33, img: './img/Album-3.png', count: 1 },
                { id: 4, title: 'Album 4', price: 41, img: './img/Album-4.png', count: 1 },
                { id: 5, title: 'Coffee', price: 98, img: './img/Cofee.png', count: 1 },
                { id: 6, title: 'Shirt', price: 65, img: './img/Shirt.png', count: 1 },
            ],
            shoppingCart: [],
            social: [
                { id: 1, href: 'https://www.youtube.com', img: './img/Spotify Logo.png', count: 1 },
                { id: 2, href: 'https://www.spotify.com', img: './img/Youtube Logo.png', count: 1 },
                { id: 3, href: 'https://www.facebook.com', img: './img/Facebook Logo.png', count: 1 },

            ]

        }
        this.clearShoppingCart = this.clearShoppingCart.bind(this)
    }
    addProductToCart(productId) {
        let { shoppingCart } = this.state
        console.log(productId)
        let selectedProduct = this.state.products.find(product => {
            return product.id === productId
        })
        console.log("selectedProduct", selectedProduct)
        this.setState(
            {
                shoppingCart: [...shoppingCart, selectedProduct]
            }
        )

    }
    shopRemoveHandler(removeId) {
        let newDeletedCart = this.state.shoppingCart.filter(product => {
            return product.id !== removeId
        })
        this.setState({
            shoppingCart: newDeletedCart

        })
        console.log("removedId", removeId)
    }
    clearShoppingCart() {
        this.setState({
            shoppingCart: []
        })
    }
    render() {
        return (
            <>
                <header className="main-header">
                    <nav className="main-nav nav">
                        <ul className="d-flex">
                            <li><a href="void()">HOME</a></li>
                            <li><a href="void()">STORE</a></li>
                            <li><a href="void()">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 className="band-name band-name-large">Shop Shop</h1>
                </header>
                <section className="container content-section">
                    <div className="shop-items">
                        {this.state.products.map(product => (

                            <Product {...product} key={product.id} onAddProduct={this.addProductToCart.bind(this)} />
                        ))}
                    </div>
                </section>
                <section className="container content-section">
                    <h2 className="section-header">CART</h2>
                    <div className="cart-row">
                        <span className="cart-item cart-header cart-column">ITEM</span>
                        <span className="cart-price cart-header cart-column">PRICE</span>
                        <span className="cart-quantity cart-header cart-column">Removing</span>
                    </div>
                    <div className="cart-items">
                        {this.state.shoppingCart.map(product => (

                            <CartProduct {...product} key={product.id} onRemove={this.shopRemoveHandler.bind(this)} />
                        ))}

                    </div>

                    <button onClick={this.clearShoppingCart} className="btn btn-primary btn-purchase" type="button" id="remove-all-product">
                        Empty Cart
                    </button>
                </section>
                <footer className="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">The Generics</h3>
                        <ul class="nav footer-nav">
                            {this.state.social.map(social => (
                                <Social {...social} key={social.id} />
                            ))}

                        </ul>
                    </div>
                </footer>
            </>

        )
    }
}