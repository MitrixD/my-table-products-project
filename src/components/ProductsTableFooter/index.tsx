import React, { memo } from 'react';
import { GridFooter, GridFooterContainer } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { useGetProductsFooterData } from '../../hooks/useGetProductsFooterData';

const ProductsFooter = () => {
  const { totalVolume, totalQty } = useGetProductsFooterData();
  return (
    <GridFooterContainer sx={{ justifyContent: 'left' }}>
      {totalQty > 0 && (
        <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
          Общее количество: (
          {totalQty}
          )
        </Typography>
      )}
      {totalVolume > 0 && (
        <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}>
          Общий объём: (
          {totalVolume}
          )
        </Typography>
      )}
      <GridFooter
        sx={{
          border: 'none',
        }}
      />
    </GridFooterContainer>
  );
};

export default memo(ProductsFooter);
