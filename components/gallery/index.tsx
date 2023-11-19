"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

import { IImage } from "@/types";
import GalleryTab from "./gallery-tab";

interface IGalleryProps {
  images: IImage[];
}

function Gallery({ images }: IGalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse items-start">
      <div className="mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className=" flex items-center gap-4">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-square w-full max-w-lg">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="w-full max-w-lg h-full aspect-square relative sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt="productImage"
                layout="fill"
                className="object-cover object-center "
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Gallery;
