import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";
import errorsReducer from "./erorrs/erorrs";
import burgerMenuSlice from "./burgerMenu/burgerMenu";

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  errors: errorsReducer,
  burgerMenu: burgerMenuSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
