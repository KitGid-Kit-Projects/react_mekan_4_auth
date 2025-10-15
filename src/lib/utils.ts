// Import utilities for handling conditional class names
import { clsx, type ClassValue } from "clsx" // clsx allows combining strings, arrays, and conditionals into a single className string
import { twMerge } from "tailwind-merge" // twMerge intelligently merges Tailwind CSS classes (resolves conflicts like "p-2 p-4")

// Define a helper function "cn" (short for "class names")
// It merges class names safely, removes duplicates, and resolves conflicting Tailwind utilities
export function cn(...inputs: ClassValue[]) {
  // Combine all class names using clsx, then merge them with Tailwind’s logic
  return twMerge(clsx(inputs))
}
