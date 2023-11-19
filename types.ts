export interface IBillboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface ICategory {
  id: string;
  name: string;
  billboard: IBillboard;
}

export interface IProduct {
  id: string;
  name: string;
  price: string;
  isFeatured: string;
  isArchived: string;
  category: ICategory;
  color: IColor;
  size: ISize;
  images: IImage[];
}

export interface IImage {
  id: string;
  url: string;
}

export interface ISize {
  id: string;
  name: string;
  value: string;
}

export interface IColor {
  id: string;
  name: string;
  value: string;
}
