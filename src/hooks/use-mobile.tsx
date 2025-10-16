// Import the entire React library to access hooks like useState and useEffect
import * as React from "react"

// Define the screen width breakpoint for mobile devices (in pixels)
const MOBILE_BREAKPOINT = 768 // Any screen smaller than 768px will be considered mobile

// Custom hook that detects whether the user’s screen size is mobile or not
export function useIsMobile() {
  // Define a state variable to store whether the screen is mobile-sized
  // It starts as undefined (before we know the screen size)
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // useEffect runs after the component mounts to check screen size and listen for changes
  React.useEffect(() => {
    // Create a MediaQueryList object that watches screen width changes
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Define a callback function to run whenever screen width changes
    const onChange = () => {
      // Update the state based on whether the current screen width is less than the breakpoint
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add the event listener for viewport width changes
    mql.addEventListener("change", onChange)

    // Set the initial state immediately (in case the effect hasn't run yet)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // Cleanup function to remove the event listener when the component unmounts
    return () => mql.removeEventListener("change", onChange)
  }, []) // Empty dependency array ensures this runs only once on mount

  // Return a boolean indicating whether the current device is mobile
  // `!!` converts undefined to false for consistent return type
  return !!isMobile
}
