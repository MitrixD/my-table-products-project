import React, { useEffect, memo, useCallback, useState } from 'react';
import { DataGrid, GridSelectionModel, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { IProductsTableProps } from './interfaces';
import { ProductsTableData } from '../../models/products';
import { productsSlice } from '../../store/reducers/productsSlice';
import { useAppDispatch } from '../../hooks/redux';
import { getColumns } from './utils';
import ProductsFooter from '../ProductsTableFooter';

const ProductsTable = ({ productsTableData, selectedProducts, loading }: IProductsTableProps): JSX.Element => {
  const { selectProducts } = productsSlice.actions;
  const [tableData, setTableData] = useState<ProductsTableData[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const dispatch = useAppDispatch();

  const onSelect = useCallback(
    (ids: GridSelectionModel) => {
      const selection = ids.map((value) => value.toString());
      setSelectionModel(ids);
      dispatch(selectProducts(selection));
    },
    [dispatch, selectProducts],
  );

  useEffect(() => {
    setTableData(productsTableData);
    setSelectionModel(selectedProducts);
  }, [selectedProducts, productsTableData]);

  return (
    <Box sx={{ height: '95vh' }}>
      <DataGrid
        loading={loading}
        rows={tableData}
        columns={getColumns()}
        pageSize={100}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          onSelect(newSelectionModel);
        }}
        selectionModel={selectionModel}
        components={{ Footer: ProductsFooter, Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            csvOptions: { disableToolbarButton: true },
            printOptions: { disableToolbarButton: true },
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        hideFooterSelectedRowCount
        hideFooterPagination
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnMenu
      />
    </Box>
  );
};

export default memo(ProductsTable);
