"use client";

import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import { IProduct } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import usePervieModal from "@/hooks/use-perview-modal";
import useCart from "@/hooks/use-cart";

interface IProductCard {
  data: IProduct;
}

function ProductCard({ data }: IProductCard) {
  const router = useRouter();
  const perviewModal = usePervieModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPerview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    perviewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 "
      onClick={handleClick}
    >
      {/* Images And Actions */}

      <div className="aspect-square rounded-xl  bg-gray-100 relative">
        <Image
          src={data?.images?.[0].url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md "
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute px-6 bottom-5 w-full">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={onPerview}
            />

            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
}

export default ProductCard;
