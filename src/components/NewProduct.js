import React, { Component } from "react";
import { connect } from "react-redux";
import {addProduct} from '../actions/productsActions';
import * as uuid from 'uuid/v1'
class NewProduct extends Component {
  state = {
    nombre: '',
    precio: '',
    error: false
  }

  productName = (e) => {
    console.log(e.target.value)
    this.setState({nombre: e.target.value})
  }
  productPrice = (e) => {
    this.setState({precio: e.target.value})
    console.log(e.target.value)
  }

  newProductAdd = e => {
    e.preventDefault()
    const {nombre, precio} = this.state;
    // validated form
    if ( nombre === '' || precio === '' ) {
      this.setState({error: true});
      return;
    }
    this.setState({error: false})
    
    const infoProduct = {
      nombre,
      precio,
      id: uuid()
    }
    console.log(infoProduct)
    this.props.addProduct(infoProduct);
    // route to other compoent
    this.props.history.push('/');

  }

  render() {

    const {error} = this.state
    console.log(error)
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Agregar Nuevo Producto</h2>
              <form onSubmit={this.newProductAdd}>
                <div className="form-group">
                  <label>Titulo</label>
                  <input
                  onChange={this.productName}
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                  />
                </div>
                <div className="form-group">
                  <label>Precio del Producto</label>
                  <input
                  onChange={this.productPrice}
                    type="text"
                    className="form-control"
                    placeholder="Precio"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Agregar
                </button>
              </form>
              {error ? <div className="font-weight-bold alert alert-danger text-center mt-5">FIll put name and price please</div> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addProduct }
)(NewProduct);
