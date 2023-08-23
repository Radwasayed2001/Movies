import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/slice';
import productSlice2 from './slices/slice2';
export const Store = configureStore({
  reducer:{
    productSlice,
    productSlice2,
  }
}

)