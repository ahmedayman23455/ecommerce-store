import React from "react";

import getProducts from "@/actions/get-products";
import getProduct from "@/actions/get-product";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

export const revalidate = 0;

interface IProductPageProps {
  params: {
    productId: string;
  };
}

async function ProductPage({ params }: IProductPageProps) {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8 ">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* gallery */}
            <Gallery images={product.images} />

            {/* info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
        </div>

        <hr className="my-10" />

        <ProductList title="Related Items" items={suggestedProducts} />
      </Container>
    </div>
  );
}

export default ProductPage;
