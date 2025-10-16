// Import clsx utility — it conditionally joins class names together
// Example: clsx('btn', isActive && 'btn-primary') → "btn btn-primary"
import { clsx, type ClassValue } from "clsx"

// Import twMerge — a Tailwind-specific utility that intelligently merges conflicting classes
// Example: twMerge('p-2 p-4') → "p-4" (resolves conflicts automatically)
import { twMerge } from "tailwind-merge"

// --------------------------------------------
// 🔹 cn (class name) utility function
// --------------------------------------------
// Combines clsx and twMerge for clean, conflict-free Tailwind class management.
//
// ✅ clsx handles conditional classes
// ✅ twMerge removes duplicate or conflicting Tailwind classes
//
// Example:
//   cn("p-2", isActive && "bg-blue-500", "p-4")
//   → "bg-blue-500 p-4"
export function cn(...inputs: ClassValue[]) {
  // Pass all class inputs through clsx (to conditionally join)
  // then through twMerge (to intelligently merge Tailwind classes)
  return twMerge(clsx(inputs))
}
