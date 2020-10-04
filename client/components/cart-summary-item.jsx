import React from 'react';

export default function CartSummaryItem(item) {
  return (
    <div className="col-lg product-details-container shadow-lg p-3 mb-1 bg-white rounded" id={item.productId}>
      <div className="col-lg pic-price d-flex flex-wrap justify-content-between">
        <img className="col cart-image" src={item.src} />
        <div className="col name-price-details mb-4 mr-1 ml-1">
          <h3 className=" cart-name">{item.name}</h3>
          <div className=" price">${item.price}</div>
          <div className=" short-desc">{item.shortDesc}</div>
        </div>
      </div>
    </div>
  );

}
