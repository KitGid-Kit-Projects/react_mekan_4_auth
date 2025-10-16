// Import the custom authentication context hook to access user data and sign-out function
import { useAuth } from "@/context/AuthContext";

// Import React Router hook to navigate between pages
import { useNavigate } from "react-router-dom";

// Define a custom hook for handling dashboard-specific logic and data
export const useDashboardData = () => {
  // Destructure the current user and signOut function from the AuthContext
  const { currentUser, signOut } = useAuth();

  // Initialize navigation hook to programmatically redirect users
  const navigate = useNavigate();

  // --- HANDLE SIGN OUT FUNCTION ---
  // This function logs the user out and redirects them to the login page
  const handleSignOut = async () => {
    try {
      // Call the signOut function from context (Firebase logout)
      await signOut();

      // Navigate to the login screen after successful sign out
      navigate("/login");
    } catch (error) {
      // Handle or log any sign-out errors
      console.error("Sign out error:", error);
    }
  };

  // --- DATE FORMATTER FUNCTION ---
  // Converts a timestamp string into a readable date format (e.g., "June 10, 2025")
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // --- DAYS ACTIVE CALCULATION ---
  // Calculates how many days the user has been active since account creation
  const daysActive = currentUser?.metadata?.creationTime
    ? Math.floor(
        // Get current time minus account creation time (in milliseconds)
        (Date.now() -
          new Date(currentUser.metadata.creationTime).getTime()) /
          (1000 * 60 * 60 * 24) // Convert milliseconds → days
      )
    : 0; // Default to 0 if user data is not available

  // Return all useful data and functions to be used in dashboard components
  return { currentUser, handleSignOut, formatDate, daysActive };
};
