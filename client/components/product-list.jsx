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
        <div className="cards-container col-10 d-flex justify-content-center flex-wrap">
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
        <div className="col-1"></div>
      </main>
    );
  }
}

export default ProductList;
