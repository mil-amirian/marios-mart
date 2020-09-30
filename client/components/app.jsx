import React from 'react';
import PageTitle from './header';
import ProductList from './product-list';
import ProductDetails from './product-page';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

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
      cart: [],
      cartTotal: 0
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateCartCountForUser = this.updateCartCountForUser.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.calculateCartTotal = this.calculateCartTotal.bind(this);
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
        this.calculateCartTotal();

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

  placeOrder(order) {
    const name = order.name;
    const creditCard = order.creditCard;
    const address = order.shippingAddress;

    const postOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        creditCard: creditCard,
        name: name,
        shippingAddress: address
      })
    };
    fetch('/api/orders', postOptions)
      .then(res => res.json())
      .then(order => {
        this.setState(state => ({
          cart: [],
          view: {
            name: 'catalog',
            params: {}
          }
        }));
      });

  }

  calculateCartTotal() {
    if (this.state.cart.length > 0) {
      let cartTotal = 0;
      for (let i = 0; i < this.state.cart.length; i++) {
        cartTotal += this.state.cart[i].price;
      }
      this.setState(state => ({
        cartTotal: cartTotal
      }));
    }
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className="container-fluid">
          <PageTitle text="Wicked Sales" cartItemCount={this.updateCartCountForUser()} setView={this.setView}/>
          <ProductList setView={this.setView}/>
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div className="container-fluid">
          <PageTitle text="Wicked Sales" cartItemCount={this.updateCartCountForUser()} setView={this.setView}/>
          <ProductDetails id={this.state.view.params.productId} setView={this.setView} addToCart={this.addToCart}/>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className="container-fluid">
          <PageTitle text="Wicked Sales" cartItemCount={this.updateCartCountForUser()} setView={this.setView}/>
          <CartSummary cartItems={this.state.cart} setView={this.setView} addToCart={this.addToCart} />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      if (this.state.cartTotal > 0) {
        return (
          <div className="container-fluid">
            <PageTitle text="Wicked Sales" cartItemCount={this.updateCartCountForUser()} setView={this.setView}/>
            <CheckoutForm setView={this.setView} price={this.state.cartTotal} order={this.placeOrder}/>
          </div>
        );
      } else {
        return (
          <h1>Loading checkout page ... </h1>

        );
      }

    }

  }
}
