// Import the React library to use hooks
import * as React from "react"

// --- CONSTANT ---
// Define the breakpoint width (in pixels) for mobile devices
// If the viewport is smaller than this, it's considered "mobile"
const MOBILE_BREAKPOINT = 768

// --- CUSTOM HOOK DEFINITION ---
// This hook detects whether the user's current device width is considered "mobile"
export function useIsMobile() {
  // State to store whether the current screen size is mobile or not
  // It starts as undefined until the effect runs
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // --- EFFECT: RUNS ONCE WHEN COMPONENT MOUNTS ---
  React.useEffect(() => {
    // Create a media query listener that matches widths below the mobile breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Define a handler that updates the state whenever the window size changes
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add an event listener to detect changes in viewport width
    mql.addEventListener("change", onChange)

    // Set initial state based on the current window width
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // --- CLEANUP FUNCTION ---
    // Remove the event listener when the component is unmounted
    return () => mql.removeEventListener("change", onChange)
  }, []) // Empty dependency array → runs only once on mount

  // Return a boolean value indicating if the device is mobile
  // The double negation (!!) ensures it always returns `true` or `false`
  return !!isMobile
}
