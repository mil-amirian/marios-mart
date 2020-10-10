import React from 'react';
import EachProduct from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getAllProducts = this.getAllProducts.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => {
        this.setState(state => ({
          products: products
        }));
      });
  }

  render() {
    return (
      <main className="row body-section">
        <div className="col-1"></div>
        <div className="col-md-12">
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-10 d-flex flex-wrap justify-content-center">
              {
                this.state.products.map(product => {
                  return (
                    <EachProduct
                      key={product.productId}
                      id={product.productId}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      shortDescription={product.shortDescription}
                      click={this.props.setView}
                    />
                  );
                })
              }
            </div>
          </div>

        </div>
        <div className="col-1 mb-5"></div>
      </main>
    );
  }
}

export default ProductList;
