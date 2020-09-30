import React from 'react';

export default function CartSummaryItem(item) {
  return (
    <div className="product product-details-container shadow-lg p-3 mb-1 bg-white rounded" id={item.productId}>
      <div className="pic-price">
        <img className="cart-image" src={item.src} />
        <div className="name-price-details">
          <h3 className="name">{item.name}</h3>
          <div className="price">${item.price}</div>
          <div className="short-desc">{item.shortDesc}</div>
        </div>
      </div>
    </div>
  );

}
