import { productSlice } from "./productSlice";

export const fetchProduct = () => async (dispatch) => {
  try {
    dispatch(productSlice.actions.productFetching());
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(productSlice.actions.productFetchingSuccess(data));
  } catch (e) {
    dispatch(productSlice.actions.productFetchingError(e.message));
  }
};
