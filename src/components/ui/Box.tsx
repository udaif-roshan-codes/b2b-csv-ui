"use client";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const boxVariants = cva("w-full", {
  variants: {
    padding: {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
    border: {
      none: "",
      default: "border border-gray-200",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    bg: {
      none: "",
      white: "bg-white",
      muted: "bg-gray-50",
    },
  },
  defaultVariants: {
    padding: "md",
    border: "none",
    rounded: "md",
    bg: "none",
  },
});

export function Box({ className, ...props }: any) {
  return <div className={cn(boxVariants(props), className)} {...props} />;
}
