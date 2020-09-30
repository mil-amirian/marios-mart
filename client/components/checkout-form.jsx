import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const id = event.target.id;
    if (id === 'name') {
      this.setState({
        name: event.target.value
      });
    } else if (id === 'creditCard') {
      this.setState({
        creditCard: event.target.value
      });
    } else if (id === 'address') {
      this.setState({
        shippingAddress: event.target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const orderDetails = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.onSubmit(orderDetails);
    this.setState(state => ({
      name: '',
      creditCard: '',
      shippingAddress: ''
    }));

  }

  render() {
    return (
      <main className="row body-section">
        <div className="col-1"></div>
        <div className="details-container col-10">
          <div className="cart-title d-flex flex-column shadow-lg p-3 mb-1 bg-white rounded-bottom justify-content-left">
            <h2>Checkout</h2>
            <span className="checkout-total">Your Cart Total is <span className="badge badge-success">${((this.props.price) / 100).toFixed(2)}</span></span>
          </div>
          <div className="cart-title d-flex flex-column shadow-lg p-3 mb-1 bg-white rounded-bottom justify-content-center">
            <form className="col-6 align-self-center m-5" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} type="text" className="form-control" id="name" aria-describedby="nameHelp" required/>
                <small id="nameHelp" className="form-text text-muted">Please provide your full name.</small>
              </div>
              <div className="form-group">
                <label htmlFor="creditCard">Credit Card</label>
                <input onChange={this.handleChange} type="number" className="form-control" id="creditCard" required/>
                <small id="creditCardHelp" className="form-text text-muted">Please provide your credit card number.</small>
              </div>
              <div className="form-group">
                <label htmlFor="address">Shipping Address</label>
                <textarea onChange={this.handleChange} type="Textarea" className="form-control" id="address" required/>
                <small id="addressInputhelp" className="form-text text-muted">Please provide your full shipping address.</small>
              </div>
              <div className="d-flex justify-content-between">
                <div className="back-button ml-1 mt-4" onClick={() => { this.props.setView('catalog', {}); }}>&#60; Continue Shopping</div>
                <button type="submit" className="btn btn-primary">Place Order</button>
              </div>

            </form>
          </div>
        </div>
        <div className="col-1"></div>
      </main>
    );
  }
}
