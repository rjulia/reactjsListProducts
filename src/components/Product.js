import React, { Component } from "react";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { deleteProduct } from "../actions/productsActions";

class Product extends Component {

  deleteProduct = () => {
    const id = this.props.product.id
    this.props.deleteProduct(id)
  }

  render() {
    const { id, nombre, precio } = this.props;
    return (
      
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 d-flex justify-content-between align-items-center">
            <p className="text-dark m-0">{nombre}</p> 
            <span className="badge badge-warning text-dark">{precio}</span> 
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center">
            <Link to={`product/edit/${id}`} className="btn btn-primary mr-2">EDIT</Link>
            <button onClick={this.deleteProduct} type="button" className="btn btn-danger">DELETE</button>
          </div>
          
        </div>
      
    );
  }
}


// conect always needs to params, mapStateToProps( or NULL),
// and acctions mapDispatchToProps
export default connect(
  null,
  { deleteProduct }
)(Product);
