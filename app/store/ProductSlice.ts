import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productInstance } from '../api';
import { ProductsState } from '../types';

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
  skip: 0,
  limit: 10,
  hasMore: true,
};
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ skip, limit }: { skip: number; limit: number }) => {
    const response = await productInstance.get(`products?limit=${limit}&skip=${skip}`);
    return response.data.products;
  },
);
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetData: state => {
      state.items = [];
      state.skip = 0;
      state.hasMore = true;
    },
    incrementSkip: state => {
      state.skip += state.limit;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...state.items, ...action.payload];
        state.hasMore = action.payload.length === state.limit || false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { resetData, incrementSkip } = productsSlice.actions;

export default productsSlice.reducer;
