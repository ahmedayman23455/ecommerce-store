"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";

import Button from "@/components/ui/button";
import { IColor, ISize } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Filter from "./Filter";

interface IMobileFiltersProps {
  sizes: ISize[];
  colors: IColor[];
}

function MobileFilters({ sizes, colors }: IMobileFiltersProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center justify-center lg:hidden"
      >
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        onClose={onClose}
        className="relative z-40 lg:hidden"
      >
        {/* background */}
        <div className="fixed inset-0 bg-black bg-opacity-25 flex " />

        {/* Dilaog Panel */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative bg-white ml-auto w-full h-full max-w-xs py-4 pb-6 px-4 shadow-xl flex-col overflow-y-auto">
            {/* close button */}
            <div className="flex items-center justify-end">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            {/* Render The filters */}

            <div className="p-4">
              <Filter valueKey="sizeId" name="sizes" data={sizes} />
              <Filter valueKey="colorId" name="colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default MobileFilters;
