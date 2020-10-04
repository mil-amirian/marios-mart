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
            <div className="title-header row d-flex align-items-center shadow-lg p-3 mb-2 bg-white rounded-bottom">
              <h4 className="ml-2">{this.state.product.name} from Wicked Sales</h4>
            </div>
            <div className="row product-details-container shadow-lg p-3 mb-3 bg-white rounded-top">
              <div className="row back-button ml-2 mb-4" onClick={() => this.props.setView('catalog', this.state.product.id)}>&#60; Back to catalog</div>
              <div className="pic-price row">
                <img className="image col-lg" src={this.state.product.image} />
                <div className="name-price-details col-lg ml-4">
                  <h3 className="name row">{this.state.product.name}</h3>
                  <div className="price row">${(this.state.product.price / 100).toFixed(2)}</div>
                  <div className="short-desc row">{this.state.product.shortDescription}</div>
                  <button className="btn btn-success row" onClick={() => this.props.addToCart(this.state.product)}>
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="long-desc row">{this.state.product.longDescription}</div>
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
