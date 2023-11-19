import React from "react";

import { IProduct } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface IProductList {
  title: string;
  items: IProduct[];
}

function ProductList({ title, items }: IProductList) {
  return (
    <div className="space-y-4 mb-6 px-4">
      <h3 className="font-bold text-3xl">{title}</h3>

      {items.length === 0 && <NoResults />}

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
