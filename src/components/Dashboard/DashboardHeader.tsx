import React from "react";
import { Layout, Typography, Button } from "antd";
import { LogoutOutlined, RocketOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Title } = Typography;

interface Props {
  onSignOut: () => void;
}

const DashboardHeader: React.FC<Props> = ({ onSignOut }) => (
  <Header
    style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "0 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <RocketOutlined style={{ fontSize: "24px", color: "white" }} />
      <Title level={3} style={{ margin: 0, color: "white" }}>
        Dashboard
      </Title>
    </div>

    <Button
      type="text"
      icon={<LogoutOutlined />}
      onClick={onSignOut}
      style={{
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontWeight: "500",
      }}
    >
      Sign Out
    </Button>
  </Header>
);

export default DashboardHeader;
