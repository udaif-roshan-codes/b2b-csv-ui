"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const stackVariants = cva("flex", {
    variants: {
      direction: {
        vertical: "flex-col",
        horizontal: "flex-row",
      },
      gap: {
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
      },
    },
    defaultVariants: {
      direction: "vertical",
      gap: "md",
      align: "start",
    },
  });
  
  export function Stack({ className, ...props }: any) {
    return <div className={cn(stackVariants(props), className)} {...props} />;
  }
  