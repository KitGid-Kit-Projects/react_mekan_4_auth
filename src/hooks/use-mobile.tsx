// Import all React features (useState, useEffect)
import * as React from "react"

// Define the breakpoint width for mobile devices (in pixels)
const MOBILE_BREAKPOINT = 768

// Custom hook that detects whether the current screen width is mobile-sized
export function useIsMobile() {
  // Local state to track if the viewport is mobile
  // Starts undefined until first measurement
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // useEffect runs once on mount to set up and clean up listeners
  React.useEffect(() => {
    // Create a media query listener for screens smaller than MOBILE_BREAKPOINT
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Function that updates state when screen width crosses breakpoint
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Attach the event listener for changes (resizing, device rotation, etc.)
    mql.addEventListener("change", onChange)

    // Set initial value immediately (for first render)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // Clean up listener when the component unmounts
    return () => mql.removeEventListener("change", onChange)
  }, []) // Empty dependency array ensures it runs only once

  // Return a boolean (forces undefined → false with !!)
  return !!isMobile
}
