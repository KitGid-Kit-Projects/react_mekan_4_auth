// Import React to define and render the component
import React from "react";

// Import Ant Design Layout component for page structure
import { Layout } from "antd";

// Import custom dashboard components
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import { useDashboardData } from "@/hooks/Dashboard/useDashboardData";
import WelcomeCard from "@/components/Dashboard/WelcomeCard";
import StatsSection from "@/components/Dashboard/StatsSection";
import AccountInfoCard from "@/components/Dashboard/AccountInfoCard";

// Extract Content component from Ant Design Layout for cleaner code
const { Content } = Layout;

// --- MAIN DASHBOARD COMPONENT ---
const Dashboard: React.FC = () => {
  // Use custom hook to retrieve user data, formatted date, active days, and sign-out logic
  const { currentUser, handleSignOut, formatDate, daysActive } = useDashboardData();

  // --- COMPONENT RENDER ---
  return (
    // Main layout container that fills the entire viewport height
    <Layout style={{ minHeight: "100vh" }}>
      {/* --- HEADER SECTION --- */}
      {/* Header with gradient background and sign-out button */}
      <DashboardHeader onSignOut={handleSignOut} />

      {/* --- MAIN CONTENT SECTION --- */}
      <Content
        style={{
          padding: "24px", // Space inside the content area
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Soft gradient background
          minHeight: "calc(100vh - 64px)", // Ensure full height minus header height
        }}
      >
        {/* Centered container for dashboard cards */}
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* --- WELCOME CARD --- */}
          {/* Displays greeting, user email, and account creation date */}
          <WelcomeCard
            email={currentUser?.email}
            creationTime={currentUser?.metadata.creationTime}
            formatDate={formatDate}
          />

          {/* --- STATS SECTION --- */}
          {/* Shows days active, account status, and security level */}
          <StatsSection daysActive={daysActive} />

          {/* --- ACCOUNT INFO CARD --- */}
          {/* Displays detailed Firebase account info such as UID, email verification, etc. */}
          <AccountInfoCard
            uid={currentUser?.uid}
            emailVerified={currentUser?.emailVerified}
            lastSignInTime={currentUser?.metadata.lastSignInTime}
            formatDate={formatDate}
          />
        </div>
      </Content>
    </Layout>
  );
};

// Export the component for use in routing or higher-level layouts
export default Dashboard;
