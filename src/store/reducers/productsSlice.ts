import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsData } from '../../models/products';

interface ProductsState {
  selectedIds: string[];
  productsData: ProductsData[];
  error: any;
  isLoading: boolean;
  isOpenPopup: boolean;
}

const initialState: ProductsState = {
  selectedIds: [],
  productsData: [],
  isLoading: false,
  error: '',
  isOpenPopup: false
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProducts(state, action: PayloadAction<string[]>) {
      state.selectedIds = action.payload;
    },
    productsFetchingSuccess(state, action: PayloadAction<ProductsData[]>) {
      state.error = '';
      state.isLoading = false;
      state.productsData = action.payload;
    },
    productsFetchingError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    productsFetching(state) {
      state.isLoading = true;
    },
    showPopup(state, action: PayloadAction<boolean>) {
      state.isOpenPopup = action.payload;
    }
  },
});

export default productsSlice.reducer;
