// Import all React features (useState, useEffect, etc.)
import * as React from "react"

// Define a constant for the screen width breakpoint (in pixels)
// Anything below 768px will be considered "mobile"
const MOBILE_BREAKPOINT = 768

// Custom hook to detect if the user's device width is considered mobile
export function useIsMobile() {
  // State to store whether the current screen width is mobile
  // Initialized as undefined (before we check the actual width)
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // useEffect ensures the logic only runs on the client (after mount)
  React.useEffect(() => {
    // Create a MediaQueryList object to track changes in screen width
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Handler that updates the state whenever the viewport size changes
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add event listener to respond to viewport width changes
    mql.addEventListener("change", onChange)

    // Set initial value when the component mounts
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // Cleanup: remove event listener when component unmounts
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Return a boolean value — true if mobile, false otherwise
  // `!!` ensures the return type is always boolean (not undefined)
  return !!isMobile
}
