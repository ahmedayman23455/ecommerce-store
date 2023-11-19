"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import qs from "query-string";

import { ISize, IColor } from "@/types";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IFilterProps {
  valueKey: string;
  name: string;
  data: IColor[] | ISize[];
}

function Filter({ valueKey, name, data }: IFilterProps) {
  // valueKey="sizeId" name="sizes" data={sizes}
  const searchParams = useSearchParams(); // object contain many functions

  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    // searchParams.toString() > colorId=663d588c-7e2d-4419-acf2-73019de29131&sizeId=327310c9-4e6f-49c4-a2fb-0d2de4ad8549
    //qs.parse(searchParams.toString())  >  {colorId: ########### , sizeId: ##########}

    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    console.log(window.location);

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true } //Skip keys with null as the value.
    );

    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>

      <hr className="my-4" />

      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
