import React from 'react';

export default function CartSummaryItem(item) {
  return (
    <div className="product product-details-container mb-2 mt-2 shadow-lg bg-white rounded" id={item.productId}>
      <div className="row pic-price d-flex flex-wrap">
        <div className="col-lg mb-3">
          <img className="cart-image mx-auto d-block" src={item.src} />
        </div>
        <div className="col-lg name-price-details">
          <h3 className="name">{item.name}</h3>
          <div className="price">${item.price}</div>
          <div className="short-desc">{item.shortDesc}</div>
        </div>
      </div>
    </div>
  );

}
