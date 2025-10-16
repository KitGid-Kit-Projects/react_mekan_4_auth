// Import `clsx` for conditional class name merging
// and the `ClassValue` type for TypeScript support
import { clsx, type ClassValue } from "clsx"

// Import `twMerge` from `tailwind-merge` to intelligently
// handle conflicts between Tailwind CSS utility classes
import { twMerge } from "tailwind-merge"

// --- UTILITY FUNCTION: cn ---
// Combines multiple class names (strings, arrays, objects) into one,
// while automatically resolving conflicts between Tailwind CSS utilities.
export function cn(...inputs: ClassValue[]) {
  // `clsx` intelligently combines class names (e.g., ignores falsy values)
  // `twMerge` ensures that Tailwind classes don't conflict
  // Example: `cn("p-2", isActive && "bg-blue-500", "p-4")` → "bg-blue-500 p-4"
  return twMerge(clsx(inputs))
}
