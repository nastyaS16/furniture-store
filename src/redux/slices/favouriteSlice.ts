import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type FavouriteItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  count: number;
};

interface FavouriteSliceState {
  items: FavouriteItem[];
}

const initialState: FavouriteSliceState = {
  items: [],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFavouriteItem(state, action: PayloadAction<FavouriteItem>) {
      //state.items.push(action.payload);
      //state.totalPrice = state.items.reduce((acc, cur) => cur.price + acc, 0);
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        console.log();
      } else {
        state.items.push({ ...action.payload });
      }
    },
    removeFavouriteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearFavouriteItems(state) {
      state.items = [];
    },
  },
});

export const selectFavourite = (state: RootState) => state.favourite;

export const selectFavouriteItemById = (id: string) => (state: RootState) =>
  state.favourite.items.find((obj) => obj.id === id);

export const { addFavouriteItem, removeFavouriteItem, clearFavouriteItems } =
  favouriteSlice.actions;

export default favouriteSlice.reducer;
