// Import React since we’re using hooks like useState and useEffect
import * as React from "react"

// Define a mobile breakpoint width (in pixels)
// Any screen narrower than this value will be considered "mobile"
const MOBILE_BREAKPOINT = 768

// --------------------------------------------
// 🔹 Custom hook: useIsMobile
// --------------------------------------------
// This hook detects whether the current viewport width is below the mobile breakpoint.
// It returns a boolean (`true` for mobile, `false` for desktop).
export function useIsMobile() {
  // Create a state variable to store whether the screen is mobile-sized
  // It starts as `undefined` to avoid SSR (server-side rendering) mismatch issues
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // useEffect ensures this code only runs on the client (after component mounts)
  React.useEffect(() => {
    // Create a MediaQueryList object that watches for screen width changes
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Define a callback function that updates `isMobile` whenever the window size changes
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Attach the change listener so it triggers when screen width crosses the breakpoint
    mql.addEventListener("change", onChange)

    // Run the function once immediately to set the initial state
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // Cleanup function: remove listener when the component unmounts
    return () => mql.removeEventListener("change", onChange)
  }, []) // Empty dependency array → runs only once on mount

  // Return a boolean value (always `true` or `false`)
  // Double negation (`!!`) ensures `undefined` becomes `false`
  return !!isMobile
}
