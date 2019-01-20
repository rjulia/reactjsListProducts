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
} from "../actions/types";


const initialState = {
  products:[],
  product: null,
  isLoading: false,
  errorMessage: ""
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        isLoading: true
      }
    case SHOW_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload
      }
    case SHOW_PRODUCTS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
    case SHOW_PRODUCT:
      return {
        ...state,
        isLoading: true
      }
    case SHOW_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.payload
      }
    case SHOW_PRODUCT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
    case EDIT_PRODUCT: 
      return {
        ...state,
        products: state.products.map(
          p => p.id === action.payload.id ? (p = action.payload) : p
        )
      }
    case DELETE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload)
      }
    case ADD_PRODUCTS: 
      return {
        ...state,
        products: [...state.products, action.payload]
      }
  
    default:
      return state;
  }
}