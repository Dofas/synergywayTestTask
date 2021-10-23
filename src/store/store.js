import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer/productSlice";
import basketReducer from "./reducers/basketReducer/basketSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  productReducer,
  basketReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basketReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
