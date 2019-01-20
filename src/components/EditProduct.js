import React, { Component } from "react";
import { connect } from "react-redux";
import {showProduct, editProduct} from '../actions/productsActions';

class EditProduct extends Component {
  state = {
    nombre: '',
    precio: '',
    id: '',
    error: false
  }
  componentDidMount(){
    const {id} = this.props.match.params
    this.props.showProduct(id);
  }

  componentWillReceiveProps( nextProps) {
    const {nombre, precio, id} = nextProps.product;
    console.log('hello')
    this.setState({
      nombre,
      precio,
      id,
    })
    console.log(nextProps.product)
  }

  productName = (e) => {
    console.log(e.target.value)
    this.setState({nombre: e.target.value})
  }
  productPrice = (e) => {
    this.setState({precio: e.target.value})
    console.log(e.target.value)
  }

  editProductAdd = e => {
    e.preventDefault()
    const {nombre, precio, id} = this.state;
    console.log(nombre, precio, id)
    // validated form
    if ( nombre === '' || precio === '' ) {
      this.setState({error: true});
      return;
    }
    this.setState({error: false})
    
    const infoProduct = {
      nombre,
      precio,
      id
    }
    console.log(infoProduct)
    this.props.editProduct(infoProduct);
    // route to other compoent
    this.props.history.push('/');

  }

  render() {

    const {error, nombre, precio} = this.state
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Editar Producto</h2>
              <form onSubmit={this.editProductAdd}>
                <div className="form-group">
                  <label>Titulo</label>
                  <input
                    defaultValue={nombre}
                    onChange={this.productName}
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                  />
                </div>
                <div className="form-group">
                  <label>Precio del Producto</label>
                  <input
                    defaultValue={precio}
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
                  Guardar Producto
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
const mapStateToProps = state => ({
  product: state.products.item
});

export default connect(
  mapStateToProps,
  { showProduct, editProduct }
)(EditProduct);