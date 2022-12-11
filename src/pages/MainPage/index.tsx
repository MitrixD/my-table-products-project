import React, { useCallback, useEffect } from 'react';
import { Box, Button, Container } from '@mui/material';
import ProductsTable from '../../components/ProductsTable';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProductsData } from '../../store/reducers/actionCreator';
import CancelProductsPopup from '../../components/CancelProductsPopup';
import { useCancelProducts } from '../../hooks/useCancelProducts';
import { productsSlice } from '../../store/reducers/productsSlice';

const MainPage = () => {
  const { productsData, isLoading, error, selectedIds, isOpenPopup } = useAppSelector((state) => state.productsReducer);
  const { showPopup } = productsSlice.actions;
  const { applyCanceling, productsForCanceling } = useCancelProducts();
  const dispatch = useAppDispatch();

  const onOpenPopup = useCallback(() => {
    dispatch(showPopup(true));
  }, [dispatch, showPopup]);

  const onClosePopup = useCallback(() => {
    dispatch(showPopup(false));
  }, [dispatch, showPopup]);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <CancelProductsPopup
        isOpen={isOpenPopup}
        apply={applyCanceling}
        undo={onClosePopup}
        products={productsForCanceling}
      />
      {error && <h1>{error}</h1>}
      <ProductsTable loading={isLoading} productsTableData={productsData} selectedProducts={selectedIds} />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          disabled={selectedIds?.length === 0}
          sx={{
            alignSelf: 'center',
            marginTop: '10px',
            width: '200px',
          }}
          variant="contained"
          onClick={onOpenPopup}
        >
          Аннулировать
        </Button>
      </Box>
    </Container>
  );
};

export default MainPage;
