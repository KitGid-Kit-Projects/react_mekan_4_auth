import React from "react";
import { Layout } from "antd";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import { useDashboardData } from "@/hooks/Dashboard/useDashboardData";
import WelcomeCard from "@/components/Dashboard/WelcomeCard";
import StatsSection from "@/components/Dashboard/StatsSection";
import AccountInfoCard from "@/components/Dashboard/AccountInfoCard";


const { Content } = Layout;

const Dashboard: React.FC = () => {
  const { currentUser, handleSignOut, formatDate, daysActive } = useDashboardData();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DashboardHeader onSignOut={handleSignOut} />

      <Content
        style={{
          padding: "24px",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <WelcomeCard
            email={currentUser?.email}
            creationTime={currentUser?.metadata.creationTime}
            formatDate={formatDate}
          />
          <StatsSection daysActive={daysActive} />
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

export default Dashboard;
