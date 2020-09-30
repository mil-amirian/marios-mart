import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(cartItems) {
  let cartTotal = 0;
  for (let i = 0; i < cartItems.cartItems.length; i++) {
    cartTotal += cartItems.cartItems[i].price;
  }
  if (cartItems.cartItems) {
    return (
      <main className="row body-section">
        <div className="col-1"></div>
        <div className="details-container col-10">
          <div className="cart-title d-flex flex-column shadow-lg p-3 mb-1 bg-white rounded-bottom justify-content-left">
            <h2> Your Cart Summary</h2>
            <div className="back-button ml-4" onClick={() => cartItems.setView('catalog', {})}>&#60; Back to catalog</div>
          </div>
          {
            cartItems.cartItems.map(cartItem => {
              return (
                <CartSummaryItem
                  key={cartItem.cartItemId}
                  productId={cartItem.productId}
                  src={cartItem.image}
                  name={cartItem.name}
                  price={(cartItem.price / 100).toFixed(2)}
                  shortDesc={cartItem.shortDescription}
                />
              );
            })
          }
          <div className="cart-title d-flex shadow-lg p-3 mt-1 mb-5 bg-white justify-content-left rounded-top justify-content-between">
            <span className="cart-total">Your Cart Total is ${(cartTotal / 100).toFixed(2)} </span>
            <button className="btn btn-success" onClick={() => cartItems.setView('checkout', {})}>Place Order</button>
          </div>
        </div>
        <div className="col-1"></div>
      </main>
    );
  } else {
    return (
      <h1>Loading Cart...</h1>
    );
  }
}
