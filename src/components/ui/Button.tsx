"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition disabled:opacity-50",
    {
      variants: {
        variant: {
          primary: "bg-blue-600 text-white hover:bg-blue-700",
          secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
          danger: "bg-red-600 text-white hover:bg-red-700",
        },
      },
      defaultVariants: {
        variant: "primary",
      },
    }
  );
  
  export function Button({ className, ...props }: any) {
    return <button className={cn(buttonVariants(props), className)} {...props} />;
  }
  