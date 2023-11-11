import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/lib/persistStore';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';
import cartReducer from './cart/cartSlice';
import userReducer from './user/userSlice';
import modalReducer from './Modal/modalSlice';

const reducers = combineReducers({
    categories : categoriesReducer,
    products : productsReducer,
    cart : cartReducer,
    user : userReducer,
    modal : modalReducer,
})

const persistConfig = {
    key : "root",
    storage,
    whiteList: ["cart","user"],
}

const persistedReducer = persistReducer(persistConfig,reducers)


export const store = configureStore({
    reducer : persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck : false,
      }),
})

export const persistor = persistStore(store);
