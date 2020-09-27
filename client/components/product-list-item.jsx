import React from 'react';

function EachProduct(props) {
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
    <div className="card mt-4" style={cardStyle}>
      <div className="row" style={imageHolder}>
        <img src={props.image} className="card-img-top" alt="..." style={imageStyle}/>
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <h6 className="price card-title">${props.price}</h6>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>
  );
}

export default EachProduct;
