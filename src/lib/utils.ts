// Import clsx for conditional class name joining
import { clsx, type ClassValue } from "clsx"

// Import twMerge to intelligently merge Tailwind CSS classes (avoids conflicts)
import { twMerge } from "tailwind-merge"

// Utility function to combine and clean up class names
export function cn(...inputs: ClassValue[]) {
  // clsx() joins conditional class names into a single string
  // twMerge() resolves Tailwind conflicts (e.g., 'p-2 p-4' becomes 'p-4')
  return twMerge(clsx(inputs))
}
