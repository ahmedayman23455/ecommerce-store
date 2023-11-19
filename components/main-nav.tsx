"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { cn } from "@/lib/utils";
import { ICategory } from "@/types";

interface IMainNavProps {
  data: ICategory[];
}

function MainNav({ data }: IMainNavProps) {
  const pathName = usePathname();

  const routes = data.map((route) => {
    return {
      href: `/category/${route.id}`,
      label: route.name,
      active: pathName === `/category/${route.id}`,
    };
  });

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}

export default MainNav;
