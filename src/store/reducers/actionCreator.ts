import axios from 'axios';
import { AppDispatch } from '../store';
import { ProductsData } from '../../models/products';
import { productsSlice } from './productsSlice';
import { prepareProductsTableData } from '../../helpers/productsDataHelper';

export const fetchProductsData = () => async (dispatch: AppDispatch) => {
  const urlProducts1 = 'http://localhost:8000/documents1';
  const urlProducts2 = 'http://localhost:8000/documents2';
  try {
    dispatch(productsSlice.actions.productsFetching());
    const [_response1, _response2] = await Promise.all([
      axios.get<ProductsData[]>(urlProducts1),
      axios.get<ProductsData[]>(urlProducts2),
    ]);
    const data = _response1?.data && _response2?.data ? _response1?.data.concat(_response2?.data) : [];
    const preparedData = prepareProductsTableData(data);
    dispatch(productsSlice.actions.productsFetchingSuccess(preparedData));
  } catch (e) {
    dispatch(productsSlice.actions.productsFetchingError(e));
  }
};

export const cancelSelectedProducts = (selectedIds: string[]) => async (dispatch: AppDispatch) => {
  const urlCancelProducts = 'http://localhost:8000/cancel';
  try {
    dispatch(productsSlice.actions.showPopup(false));
    await axios.post<string>(urlCancelProducts, { ids: selectedIds }).then(() => {
      dispatch(productsSlice.actions.selectProducts([]));
    });
  } catch (e) {
    console.log(e);
  }
};
