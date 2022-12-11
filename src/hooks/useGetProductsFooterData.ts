import { useMemo } from 'react';
import { useAppSelector } from './redux';

export const useGetProductsFooterData = () => {
  const { productsData } = useAppSelector((state) => state.productsReducer);
  const totalVolume = useMemo(() => productsData.reduce((acc, obj) => acc + obj.volume, 0), [productsData]);
  const totalQty = useMemo(() => productsData.reduce((acc, obj) => acc + obj.qty, 0), [productsData]);

  return { totalVolume, totalQty };
};
