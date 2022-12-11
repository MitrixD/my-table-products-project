export type ProductsData = {
  /*
   * Products ID
   */
  id: string;
  /*
   * Products status
   */
  status: string;
  /*
   * Products sum
   */
  sum: number;
  /*
   * Products qty
   */
  qty: number;
  /*
   * Products volume
   */
  volume: number;
  /*
   * Products name
   */
  name: string;
  /*
   * Products date
   */
  delivery_date: string;
  /*
   * Currency
   */
  currency: string;
};

export type ProductsTableData = ProductsData & {
  /*
   * Products total cost
   */
  totalCost?: string;
};
