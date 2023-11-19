import qs from "query-string";

import { IProduct } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface IQuery {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: IQuery): Promise<IProduct[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(`${url}`);
  return res.json();
};

export default getProducts;
