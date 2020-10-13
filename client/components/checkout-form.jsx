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
        <div className="details-container col">
          <div className="cart-title d-flex flex-column shadow-lg p-3 mb-1 bg-white rounded-bottom justify-content-left">
            <h2>Checkout</h2>
            <span className="checkout-total">Your Cart Total is <span className="badge badge-success">${((this.props.price) / 100).toFixed(2)}</span></span>
          </div>
          <div className="checkout d-flex flex-column shadow-lg p-3 mb-1 bg-white rounded-top">
            <form className="col align-self-center m-5" onSubmit={this.handleSubmit}>
              <div className="col disc-title d-flex shadow-sm mb-5 bg-gold justify-content-center flex-wrap">
                <span className="modal-title text-center">This site is for demonstration purposes only - please DO NOT enter any personal information</span>
              </div>
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
                <span className="back-button cont-shop ml-1 mr-2 mt-4" onClick={() => { this.props.setView('catalog', {}); }}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="mr-2 bi bi-arrow-left-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                  </svg>
                  Continue Shopping</span>
                <button type="submit" className="btn btn-primary">ORDER</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
