// src/types/product.ts

export type ProductImage = {
  name: string;
};

export type ProductStock = {
  id: number;
  productId: number;
  attributeId: number;
  subAttributeId: number;
  count: number;
  countBuy: number | null;

  // فیلدهای احتمالی دیگر API را اینجا اضافه کن
};

export type ProductAttribute = {
  // برای تعریف دقیق، نمونه کامل productAttribute لازم است.
  [key: string]: unknown;
};

export type Product = {
  createdAt: string;
  deliveryDay: number;

  fileImage: ProductImage;
  id: number;
  imageId: number;

  link: string;
  maxBuy: number;
  price: number;

  productAttribute: ProductAttribute[];
  productStock: ProductStock[];

  rate: string;
  specification: string;

  statusId: number;
  stockCount: number;
  subCategoryId: number;

  subtitle: string;
  summary: string;
  title: string;
  uuid: string;
};

export type ProductListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
};

export type ProductOrderBy =
  | 'createdAt'
  | 'price'
  | 'title'
  | 'viewNum'
  | 'favNum'
  | 'shopNum'
  | '';

export type ProductSort = 'ASC' | 'DESC' | '';

export interface ProductListParams {
  locationId?: number | string;
  justStockCount?: boolean | string;
  notId?: number | undefined;
  subCategoryId?: number[];
  orderBy?: ProductOrderBy;
  sort?: ProductSort;
  start?: number;
  limit?: number;
  list?: string;
}
