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
        const tempProdArr = products.slice();
        tempProdArr.map(product => {
          product.price = (product.price / 100).toFixed(2);
        });
        this.setState(state => ({
          products: tempProdArr
        }));
      });
  }

  render() {
    return (
      <main className="row body-section">
        <div className="col-1"></div>
        <div className="cards-container col-10 d-flex justify-content-around flex-wrap">
          {
            this.state.products.map(product => {
              return (
                <EachProduct
                  key={product.productId}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  shortDescription={product.shortDescription}
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
