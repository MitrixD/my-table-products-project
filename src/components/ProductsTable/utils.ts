import { GridColDef, GridComparatorFn, GridValueGetterParams } from '@mui/x-data-grid';
import moment from 'moment/moment';

const dateComparator: GridComparatorFn<string> = (v1, v2) =>
  moment(v1, 'DD.MM.YYYY').valueOf() - moment(v2, 'DD.MM.YYYY').valueOf();

const alphanumericalStringComparator: GridComparatorFn<string> = (v1, v2) =>
  v1.localeCompare(v2, undefined, { numeric: true, sensitivity: 'base' });

export const getColumns = (): GridColDef[] => [
  {
    field: 'name',
    headerName: 'Наименование',
    description: 'Наименование',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    filterable: true,
  },
  {
    field: 'status',
    headerName: 'Статус',
    description: 'Статус',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    filterable: true,
  },
  {
    field: 'delivery_date',
    headerName: 'Дата доставки',
    description: 'Дата доставки',
    sortable: true,
    width: 200,
    sortComparator: dateComparator,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (params: GridValueGetterParams) => `${moment(params.row.delivery_date).format('DD.MM.YYYY')}`,
    filterable: true,
  },
  {
    field: 'volume',
    headerName: 'Объём',
    description: 'Объём',
    type: 'number',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    filterable: true,
  },
  {
    field: 'sum',
    headerName: 'Сумма',
    description: 'Сумма',
    type: 'number',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    filterable: true,
  },
  {
    field: 'qty',
    headerName: 'Количество',
    description: 'Количество',
    type: 'number',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    filterable: true,
  },
  {
    field: 'currency',
    headerName: 'Валюта',
    description: 'Валюта',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    filterable: true,
  },
  {
    field: 'totalCost',
    headerName: 'Всего',
    description: 'Всего',
    align: 'center',
    sortable: true,
    sortComparator: alphanumericalStringComparator,
    headerAlign: 'center',
    filterable: true,
  },
];
