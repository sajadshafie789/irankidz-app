import { Product } from '../../../types/product';

export type GlobalProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
  isAddingToCart?: boolean;
  imageBaseUrl: string;
  disabled?: boolean;
};
