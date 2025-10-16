// Import helper functions for conditional and Tailwind class merging
import { clsx, type ClassValue } from "clsx"   // clsx helps conditionally join class names
import { twMerge } from "tailwind-merge"      // twMerge intelligently merges Tailwind CSS classes

// Utility function for combining class names cleanly and safely
export function cn(...inputs: ClassValue[]) {
  // Combine conditional class names using clsx,
  // then pass the result to twMerge to eliminate conflicting Tailwind classes
  return twMerge(clsx(inputs))
}
