export type CategoryImage = {
  name: string;
};

export type SubCategory = {
  id: number;
  categoryId: number;
  parentId: number;
  groupId: number;
  title: string;
  subtitle: string;
  // سایر فیلدهای زیر‌دسته را در صورت نیاز اضافه کن
};

export type Category = {
  createdAt: string;
  fileImage: CategoryImage;
  groupId: number;
  id: number;
  imageId: number;
  link: string;
  orderOf: number;
  subCategory: SubCategory[];
  subtitle: string;
  title: string;
};
