export type processStateProps = 'loading' | 'data' | 'error' | 'empty';

export interface FavProductProps {
  createdAt: string;
  id: number;
  product: {
    fileImage: {
      name: string;
    };
    id: number;
    link: string;
    price: number;
    rate: string;
    subtitle: string;
    summary: string;
    title: string;
  };
  productId: number;
}

