
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useDashboardData = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const daysActive = currentUser?.metadata?.creationTime
    ? Math.floor(
        (Date.now() -
          new Date(currentUser.metadata.creationTime).getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : 0;

  return { currentUser, handleSignOut, formatDate, daysActive };
};
