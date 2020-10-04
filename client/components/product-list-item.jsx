import React from 'react';

function EachProduct(props, key) {
  const cardStyle = {
    width: '20rem',
    height: '33rem'
  };
  const imageHolder = {
    width: 'auto',
    height: '550px',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const imageStyle = {
    width: '230px',
    objectFit: 'cover'
  };

  return (
    <div className="card mt-4 shadow-lg p-3 mb-2 bg-white ml-1 mr-1" style={cardStyle} onClick={() => props.click('details', props.id)} id={props.id}>
      <div className="row" style={imageHolder}>
        <img src={props.image} className="card-img-top" style={imageStyle} alt="Card image cap"/>
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <h6 className="price card-title">
            ${(props.price / 100).toFixed(2)}
        </h6>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>
  );
}

export default EachProduct;
