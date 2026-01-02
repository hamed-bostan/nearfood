import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "@/store/cart.slice";

export const testRootReducer = combineReducers({
  cart: cartReducer,
});

export type TestRootState = ReturnType<typeof testRootReducer>;
