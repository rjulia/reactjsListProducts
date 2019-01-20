import { 
  SHOW_PRODUCTS, 
  SHOW_PRODUCTS_FAILURE, 
  SHOW_PRODUCTS_SUCCESS, 
  DELETE_PRODUCTS, 
  ADD_PRODUCTS, 
  SHOW_PRODUCT, 
  SHOW_PRODUCT_SUCCESS, 
  SHOW_PRODUCT_FAILURE,
  EDIT_PRODUCT
} from "./types";

import axios from 'axios';

export const showProdcuts = () => async dispatch => {
  dispatch({type: SHOW_PRODUCTS })
  return await axios.get('http://localhost:5000/productos')
    .then((resp) => dispatch({ type: SHOW_PRODUCTS_SUCCESS, payload: resp.data }))
    .catch((error) => dispatch({ type: SHOW_PRODUCTS_FAILURE, payload: error, error: true }))
  
}
export const showProduct = id => async dispatch => {
  dispatch({type: SHOW_PRODUCT })
  return await axios.get(`http://localhost:5000/productos/${id}`)
    .then((resp) => dispatch({ type: SHOW_PRODUCT_SUCCESS, payload: resp.data }))
    .catch((error) => dispatch({ type: SHOW_PRODUCT_FAILURE, payload: error, error: true }))
}

export const editProduct = post => async dispatch => {
  const resp = await axios.put(`http://localhost:5000/productos/${post.id}`, post)
  dispatch({
    type: EDIT_PRODUCT,
    payload: resp.data
  })  
}

export const deleteProduct = (id) => async dispatch => {
  await axios.delete(`http://localhost:5000/productos/${id}`)
  dispatch({
    type: DELETE_PRODUCTS, 
    payload: id
  })
}

export const addProduct = (post) => async dispatch => {
  // soin hacer producto success or error
  const resp = await axios.post(`http://localhost:5000/productos`, post)
  dispatch({
    type: ADD_PRODUCTS, 
    payload: resp.data
  })
}
