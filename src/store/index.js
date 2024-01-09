import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/index';
import prodcutReducer from './product/index';
const store = configureStore({
  reducer: {
    user: userReducer,
    product: prodcutReducer,
  },
});
export default store;
