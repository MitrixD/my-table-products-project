import { ProductsData, ProductsTableData } from '../models/products';

export const prepareProductsTableData = (products: ProductsData[]): ProductsTableData[] => {
  if (!products) {
    return [];
  }
  return products
    .map(
      (item) =>
        ({
          ...item,
          totalCost: `${item.sum + item.qty} ${item.currency}`,
        } as ProductsTableData),
    )
    .sort((a, b) => Date.parse(a.delivery_date) - Date.parse(b.delivery_date));
};
