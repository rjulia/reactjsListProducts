import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
        <h1>
          <Link to={'/'} className="text-light">CRUD</Link>
        
        </h1>
        <Link to={'/products/new'} className="btn btn-danger nuevo-post">Add product</Link>
      </div>
    )
  }
}

export default Header
