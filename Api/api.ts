import { ProductListParams } from '../types/product';
import Config from './config';

const API_ROUTES = {
  login: (data: any) => Config.post('/login', data),
  sendCode: (data: { mobile: string }) => Config.post('send-code', data),
  productList: ({
    locationId = 1,
    justStockCount = true,
    notId = 94,
    subCategoryId = [],
    orderBy = 'createdAt',
    sort = 'ASC',
    start = 0,
    limit = 8,
  }: ProductListParams = {}) =>
    Config.get(
      `product/list?start=${start}&limit=${limit}${
        locationId ? `&locationId=${locationId}` : ''
      }${justStockCount ? `&justStockCount=${justStockCount}` : ''}${
        notId ? `&notId=${notId}` : ''
      }${subCategoryId ? `&subCategoryId=${subCategoryId}` : ''}${
        orderBy ? `&orderBy=${orderBy}` : ''
      }${sort ? `&sort=${sort}` : ''}`,
    ),
  ProductDetail: (slug?: string, id?: string) => {
    return Config.get(`product/list?slug=${slug}&id=${id}`);
  },
  UserFav: (id: string) => Config.get(`users/product/favorite/${id}`),
  categoryList: () => Config.get('category/list'),
  BrandList: () => Config.get('brand/list'),
  ProductRate: (id: string) => Config.get(`product/rate/list?productId=${id}`),
  GetComment: (id: string) => Config.get(`product/rate/list?productId=${id}`),
  FavoriteList: () => Config.get(`users/favorite/list/`),
  SendComment: (id: string, data: any) =>
    Config.post(`users/product/rate/${id}`, data),
};

export default API_ROUTES;
