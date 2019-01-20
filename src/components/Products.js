import React, { Component } from "react";
//import redux and the action
import { connect } from "react-redux";
import { showProdcuts } from "../actions/productsActions";
import Spinner from "react-spinner-material";
import styled from "styled-components";
import Product from "./Product"; 
import ProductFilter from "./ProductFilter";
import getVisibleBooks from '../selectors/products'; 


const DivContenedor = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  ul {
    width: 100%;
  }
`;

class Products extends Component {
  
  // have to call now the fuction is inside to props
  componentDidMount() {
    this.props.showProdcuts();
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <h2 className="text-center my-5">Prodducts</h2>
        <div className="row justify-content-center">
        <ProductFilter/>
          <div className="col-md-8">
            {this.props.isLoading ? (
              <DivContenedor>
                <Spinner
                  size={60}
                  spinnerColor={"#333"}
                  spinnerWidth={2}
                  visible={true}
                />
              </DivContenedor>
            ) : (
              <DivContenedor>
                {this.props.products.map(product => {
                  return(
                    <li className="list-group-item" key={product.id}>
                      <Product {...product}/>
                    </li>
                  )
                })};
              </DivContenedor>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    products: getVisibleBooks(state.products.products, state.filters),
    isLoading: state.products.isLoading
  }};
// we set connect to this component with satet, an actions
// mapStateToProps is not necesarry to declare like this but it is a convention
export default connect( mapStateToProps,{ showProdcuts })(Products);
