import { 
  SORT_BY
} from "./types";

export const sortBy = (sortType) => ({
  type: SORT_BY,
  sortType
});