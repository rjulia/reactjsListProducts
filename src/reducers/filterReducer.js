import { 
  SORT_BY
} from "../actions/types";

const initialState = {
  sortBy: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
      case SORT_BY:
          return {
              ...state,
              sortBy: action.sortType
          };
      default:
          return state;
  }
}