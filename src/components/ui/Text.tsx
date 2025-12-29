"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const textVariants = cva("", {
    variants: {
      size: {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-semibold",
      },
      tone: {
        default: "text-gray-900",
        muted: "text-gray-500",
      },
    },
    defaultVariants: {
      size: "base",
      weight: "normal",
      tone: "default",
    },
  });
  
  export function Text({ className, ...props }: any) {
    return <p className={cn(textVariants(props), className)} {...props} />;
  }
  