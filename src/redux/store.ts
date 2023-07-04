import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import item from './slices/itemSlice';
import favourite from './slices/favouriteSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { item, filter, cart, favourite },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
