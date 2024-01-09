import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  is_cart: false,
};
console.log('initialState', initialState.is_cart);
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.is_cart = action.payload.is_cart;
    },
  },
});

export const { updateCart } = productSlice.actions;
export default productSlice.reducer;
export const selectName = (state) => {
  return { is_cart: state?.product.is_cart };
};
