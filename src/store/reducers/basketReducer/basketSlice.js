import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myProducts: [],
  total: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.myProducts = state.myProducts.concat(action.payload);
      state.total += +action.payload.price;
    },
    removeProduct(state, action) {
      const removedState = state.myProducts.filter((product) => {
        return product.id !== action.payload.id;
      });
      state.myProducts = removedState;
      state.total -= action.payload.price;
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;
