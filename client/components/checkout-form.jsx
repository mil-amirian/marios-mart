import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      creditCard: null,
      shippingAddress: null
    };
    this.orderDetails = this.orderDetails.bind(this);
  }

  orderDetails() {
    event.preventDefault();
    const name = event.target[0].value;
    const creditCard = event.target[1].value;
    const address = event.target[2].value;

    return {
      name: name,
      creditCard: creditCard,
      shippingAddress: address
    };

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
            <form className="col-6 align-self-center m-5" onSubmit={() => { this.props.order(this.orderDetails()); }}>
              <div className="form-group">
                <label htmlFor="exampleName1">Name</label>
                <input type="text" className="form-control" id="exampleName1" aria-describedby="nameHelp" required/>
                <small id="nameHelp" className="form-text text-muted">Please provide your full name.</small>
              </div>
              <div className="form-group">
                <label htmlFor="creditCard">Credit Card</label>
                <input type="number" className="form-control" id="creditCard" required/>
                <small id="creditCardHelp" className="form-text text-muted">Please provide your credit card number.</small>
              </div>
              <div className="form-group">
                <label htmlFor="addressInput">Shipping Address</label>
                <textarea type="Textarea" className="form-control" id="addressInput" required/>
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
