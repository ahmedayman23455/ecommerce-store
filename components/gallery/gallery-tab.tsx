import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

import { IImage } from "@/types";
import { cn } from "@/lib/utils";

interface IGalleryTabProps {
  key: string;
  image: IImage;
}

function GalleryTab({ key, image }: IGalleryTabProps) {
  return (
    <Tab className="relative flex aspect-square w-24 cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt="productImage"
              layout="fill"
              className="object-cover object-center"
            />
          </span>

          <span
            className={cn(
              `absolute inset-0 rounded-md ring-2 ring-offset-2`,
              selected ? `ring-black` : `ring-transparent`
            )}
          />
        </div>
      )}
    </Tab>
  );
}

export default GalleryTab;
