import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { cancelSelectedProducts } from '../store/reducers/actionCreator';

export const useCancelProducts = () => {
  const { selectedIds, productsData } = useAppSelector((state) => state.productsReducer);
  const dispatch = useAppDispatch();
  const productsForCanceling = useMemo(
    () =>
      productsData
        .filter((item) => selectedIds.includes(item.id))
        .map((value) => value.name)
        .join(', '),
    [productsData, selectedIds],
  );

  const applyCanceling = useCallback(() => {
    dispatch(cancelSelectedProducts(selectedIds));
  }, [dispatch, selectedIds]);

  return { applyCanceling, productsForCanceling };
};
