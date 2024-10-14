import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productInstance } from '../api';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
}

interface ProductsState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  page: number;
  limit: number;
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
  page: 1,
  limit: 10,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page, limit }: { page: number; limit: number }) => {
    const skip = (page - 1) * limit;
    const response = await productInstance.get(`products?limit=${limit}&skip=${skip}`);
    return response.data.products;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { setPage } = productsSlice.actions;

export default productsSlice.reducer;
