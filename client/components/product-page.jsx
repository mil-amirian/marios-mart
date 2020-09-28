import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails() {
    fetch(`/api/products/${this.props.id}`)
      .then(res => res.json())
      .then(details => {
        this.setState(state => ({
          product: details
        }));
      });
  }

  render() {
    if (this.state.product) {
      return (
        <main className="row body-section">
          <div className="col-1"></div>
          <div className="details-container col-10">
            <div className="title-header d-flex align-items-center shadow-lg p-3 mb-5 bg-white rounded">
              <h2>Wicked Sales</h2>
            </div>
            <div className="product-details-container shadow-lg p-3 mb-5 bg-white rounded">
              <div className="back-button" onClick={() => this.props.setView('catalog', this.state.product.id)}>&#60; Back to catalog</div>
              <div className="pic-price">
                <img className="image" src={this.state.product.image} />
                <div className="name-price-details">
                  <h3 className="name">{this.state.product.name}</h3>
                  <div className="price">${(this.state.product.price / 100).toFixed(2)}</div>
                  <div className="short-desc">{this.state.product.shortDescription}</div>
                </div>
              </div>
              <div className="long-desc">{this.state.product.longDescription}</div>
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
