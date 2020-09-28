import React from 'react';
import PageTitle from './header';
import ProductList from './product-list';
import ProductDetails from './product-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState(state => ({
      view: {
        name: name,
        params: { productId: params }
      }
    }));
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className="container-fluid">
          <PageTitle text="Wicked Sales" />
          <ProductList setView={this.setView}/>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <PageTitle text="Wicked Sales" />
          <ProductDetails id={this.state.view.params.productId} setView={this.setView}/>
        </div>
      );
    }

  }
}
