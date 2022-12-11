import { ProductsTableData } from '../../models/products';

export interface IProductsTableProps {
  productsTableData: ProductsTableData[];
  selectedProducts: string[];
  loading: boolean;
}
