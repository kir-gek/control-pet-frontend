import { combineReducers } from "@reduxjs/toolkit";
import myOrders from "./myOrdersSlice"

export const rootReducer = combineReducers({
    myOrders
});

export const selectSelf = (state: IRootState) => state;
export type IRootState = ReturnType<typeof rootReducer>;