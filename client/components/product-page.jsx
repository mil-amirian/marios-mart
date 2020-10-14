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
          {/* <div className="col-1"></div> */}
          <div className="details-container col">
            <div className="title-header d-flex align-items-center shadow-lg p-3 mb-2 bg-white rounded-bottom">
              <span className="page-header ml-1">Mario&apos;s Mart</span>
            </div>
            <div className="product-details-container shadow-lg p-3 mb-3 bg-white rounded-top">
              <span className="back-button" onClick={() => this.props.setView('catalog', this.state.product.id)}>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="mr-2 bi bi-arrow-left-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                </svg>
                Back to catalog</span>
              <div className="col-lg pic-price d-flex flex-wrap justify-content-center align-items-center">
                <div className="col-lg">
                  <img className="row image mx-auto d-block mb-4 mt-4" src={this.state.product.image} />
                </div>
                <div className="col-lg name-price-details ml-2">
                  <h3 className="row name">{this.state.product.name}</h3>
                  <div className="row price">${(this.state.product.price / 100).toFixed(2)}</div>
                  <div className="row short-desc">{this.state.product.shortDescription}</div>
                  <button className="row btn btn-danger buy-button mb-3 mt-4" onClick={() => {
                    this.props.addToCart(this.state.product);
                    this.props.setView('atcConfirm', null);
                  }
                  }>
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="mt-4 mb-4 ml-4 mr-3 long-desc">{this.state.product.longDescription}</div>
            </div>
          </div>
          {/* <div className="col-1"></div> */}
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
