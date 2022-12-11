export interface ICancelProductsPopupProps {
  isOpen: boolean;
  apply: () => void;
  undo: () => void;
  products: string;
}
