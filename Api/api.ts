import Config from './config';

const API_ROUTES = {
  login: (data: any) => Config.post('/login', data),
  sendCode: () => Config.post('/send-code'),
  productList: (start = 0, limit = 8): any =>
    Config.get(
      `product/list?locationId=1&justStockCount=true&notId=94&orderBy=createdAt&sort=ASC&&start=${start}&limit=${limit}`,
    ),
};

export default API_ROUTES;
