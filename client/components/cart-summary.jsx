import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(cartItems) {
  let cartTotal = 0;

  for (let i = 0; i < cartItems.cartItems.length; i++) {
    cartTotal += cartItems.cartItems[i].price;
  }
  if (cartItems.cartItems) {
    const CheckoutBtn = () => {
      if (cartItems.cartItems.length > 0) {
        return (
          <button className="btn btn-success" onClick={() => cartItems.setView('checkout', {})}>CHECKOUT</button>
        );
      } else {
        return (
          <button className="btn btn-success" onClick={() => cartItems.setView('checkout', {})} disabled>CHECKOUT</button>

        );
      }
    };
    return (
      <main className="row body-section">
        <div className="col-1"></div>
        <div className="details-container col-10">
          <div className="cart-title d-flex shadow-lg p-3 mb-1 bg-white rounded-bottom justify-content-between flex-wrap">
            <span className="col cart-header">Your Cart</span>
            <span className="col back-button bk-btn-txt ml-4 mt-2 mb-2 text-right" onClick={() => cartItems.setView('catalog', {})}>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="mr-2 bi bi-arrow-left-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
              </svg>
              Return to catalog</span>
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
            <span className="cart-total align-middle mr-3">Your Cart Total is ${(cartTotal / 100).toFixed(2)} </span>
            < CheckoutBtn />
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
