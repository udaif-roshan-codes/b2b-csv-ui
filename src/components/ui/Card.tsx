"use client";
import { cva } from "class-variance-authority";
import { Box } from "./Box";

export function Card(props: any) {
    return <Box border="default" bg="white" rounded="lg" padding="lg" {...props} />;
  }
  