import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {Button, ButtonGroup} from "@nextui-org/react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
