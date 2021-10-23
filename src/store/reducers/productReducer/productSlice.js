import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productFetching(state) {
      state.isLoading = true;
    },
    productFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
    },
    productFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
