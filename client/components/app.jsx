import React from 'react';
import PageTitle from './header';
import ProductList from './product-list';
import ProductDetails from './product-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateCartCountForUser = this.updateCartCountForUser.bind(this);
  }

  setView(name, params) {
    this.setState(state => ({
      view: {
        name: name,
        params: { productId: params }
      }
    }));
  }

  getCartItems() {
    fetch('api/cart')
      .then(res => res.json())
      .then(cartItems => {
        this.setState(state => ({
          cart: this.state.cart.concat(cartItems)
        }));
      });
  }

  addToCart(product) {
    const postOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        productId: product.productId
      })
    };
    fetch('/api/cart', postOptions)
      .then(res => res.json())
      .then(cartItem => {
        this.setState(state => ({
          cart: this.state.cart.concat(cartItem[0])
        }));
      });
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
    this.getCartItems();
  }

  updateCartCountForUser() {
    const cartCount = this.state.cart.length;
    if (cartCount === 1) {
      return `${cartCount} item`;
    } else if (cartCount > 1) {
      return `${cartCount} items`;
    }
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className="container-fluid">
          <PageTitle text="Wicked Sales" cartItemCount={this.updateCartCountForUser()}/>
          <ProductList setView={this.setView}/>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <PageTitle text="Wicked Sales" cartItemCount={this.updateCartCountForUser()}/>
          <ProductDetails id={this.state.view.params.productId} setView={this.setView} addToCart={this.addToCart}/>
        </div>
      );
    }

  }
}
