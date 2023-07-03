import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Sort } from './filterSlice';

type FetchitemsArgs = {
  categoryId: number;
  search: string;
  selectedSort: Sort;
  currentPage: number;
};

export const fetchItems = createAsyncThunk<ItemsState[], FetchitemsArgs>(
  'item/fetchitemsStatus',
  async (params) => {
    const { search, selectedSort } = params;
    const { data } = await axios.get<ItemsState[]>(
      `https://641dc760945125fff3d5f129.mockapi.io/favorites?${search}&sortBy=${selectedSort.sort}&order=asc`,
    );
    return data;
  },
);

type ItemsState = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface itemSliceState {
  items: ItemsState[];
  status: Status;
}

const initialState: itemSliceState = {
  items: [],
  status: Status.LOADING,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ItemsState[]>) {
      state.items = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload; // Update state with the received data
        state.status = Status.SUCCESS;
      })
      .addCase(fetchItems.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        console.log('Error:', action.error.message); // Log the error message
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const selectItems = (state: RootState) => state.item;

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
