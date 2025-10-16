// Import React library to create and render components
import React from "react";

// Import Ant Design components for layout, typography, and buttons
import { Layout, Typography, Button } from "antd";

// Import icons from Ant Design Icons package
import { LogoutOutlined, RocketOutlined } from "@ant-design/icons";

// Extract Header from Layout for easier use
const { Header } = Layout;

// Extract Title from Typography for styled headings
const { Title } = Typography;

// Define TypeScript interface for component props
interface Props {
  onSignOut: () => void; // Function to handle sign-out action when button is clicked
}

// Define a functional React component named DashboardHeader
const DashboardHeader: React.FC<Props> = ({ onSignOut }) => (
  // Ant Design Layout.Header component - represents the top header bar
  <Header
    style={{
      // Gradient background using two shades of purple/blue
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      // Horizontal padding for spacing
      padding: "0 24px",
      // Flexbox layout to space items evenly between left and right
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      // Add a subtle shadow below the header
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    }}
  >
    {/* Left side: Logo icon and title text */}
    <div
      style={{
        display: "flex", // Use flexbox for alignment
        alignItems: "center", // Vertically center items
        gap: "16px", // Space between icon and title
      }}
    >
      {/* Rocket icon to represent dashboard or launch theme */}
      <RocketOutlined style={{ fontSize: "24px", color: "white" }} />

      {/* Dashboard title text styled as a heading */}
      <Title level={3} style={{ margin: 0, color: "white" }}>
        Dashboard
      </Title>
    </div>

    {/* Right side: Sign Out button */}
    <Button
      type="text" // Use text button (no background)
      icon={<LogoutOutlined />} // Logout icon before text
      onClick={onSignOut} // Trigger onSignOut function when clicked
      style={{
        color: "white", // White text and icon
        display: "flex", // Use flexbox for icon + text alignment
        alignItems: "center", // Vertically center content
        gap: "8px", // Space between icon and text
        fontWeight: "500", // Medium font weight for better visibility
      }}
    >
      Sign Out
    </Button>
  </Header>
);

// Export component so it can be imported in other files
export default DashboardHeader;
