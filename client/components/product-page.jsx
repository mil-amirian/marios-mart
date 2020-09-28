import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.id,
      details: null
    };
    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails() {
    fetch(`/api/products/${this.state.product}`)
      .then(res => res.json())
      .then(details => {
        this.setState(state => ({
          details: details
        }));
      });
  }

  render() {
    if (this.state.details) {
      return (
        <main className="row body-section">
          <div className="col-1"></div>
          <div className="details-container col-10">
            <div className="title-header d-flex align-items-center shadow-lg p-3 mb-5 bg-white rounded">
              <h2>Wicked Sales</h2>
            </div>
            <div className="product-details-container shadow-lg p-3 mb-5 bg-white rounded">
              <div className="back-button" onClick={this.props.setView}>&#60; Back to catalog</div>
              <div className="pic-price">
                <img className="image" src={this.state.details.image} alt="..."/>
                <div className="name-price-details">
                  <h3 className="name">{this.state.details.name}</h3>
                  <div className="price">${(this.state.details.price / 100).toFixed(2)}</div>
                  <div className="short-desc">{this.state.details.shortDescription}</div>
                </div>
              </div>
              <div className="long-desc">{this.state.details.longDescription}</div>
            </div>
          </div>
          <div className="col-1"></div>
        </main>
      );
    } else {
      return (
        <h1>Loading</h1>
      );

    }

  }
}

export default ProductDetails;
