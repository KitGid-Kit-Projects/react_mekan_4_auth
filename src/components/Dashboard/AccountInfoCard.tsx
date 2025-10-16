// Import React library to create the component
import React from "react";

// Import UI components from Ant Design library
import { Card, Row, Col, Typography, Space } from "antd";

// Import user icon from Ant Design icons
import { UserOutlined } from "@ant-design/icons";

// Extract Text component from Typography for easier usage
const { Text } = Typography;

// Define TypeScript interface for component props
interface Props {
  uid?: string; // Optional: User ID
  emailVerified?: boolean; // Optional: Indicates if the user's email is verified
  lastSignInTime?: string; // Optional: Timestamp of the user's last sign-in
  formatDate: (date: string) => string; // Function to format date strings
}

// Create a functional React component called AccountInfoCard
const AccountInfoCard: React.FC<Props> = ({
  uid,
  emailVerified,
  lastSignInTime,
  formatDate,
}) => (
  // Ant Design Card component with title and styling
  <Card
    title={
      // Use Space to neatly align icon and title text horizontally
      <Space>
        {/* User icon with custom color */}
        <UserOutlined style={{ color: "#667eea" }} />
        {/* Title text */}
        <span>Account Information</span>
      </Space>
    }
    // Add rounded corners and subtle shadow for better UI
    style={{
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    }}
  >
    {/* Use Ant Design Row and Col for responsive layout */}
    <Row gutter={[24, 16]}>
      {/* Column 1: Display user ID */}
      <Col xs={24} md={12}>
        <Text strong>User ID</Text> {/* Label */}
        <Text code>{uid}</Text> {/* User ID displayed in code style */}
      </Col>

      {/* Column 2: Display email verification status */}
      <Col xs={24} md={12}>
        <Text strong>Email Verified</Text> {/* Label */}
        {/* Text color changes based on verification status */}
        <Text style={{ color: emailVerified ? "#52c41a" : "#ff4d4f" }}>
          {emailVerified ? "Yes" : "No"} {/* Show "Yes" or "No" */}
        </Text>
      </Col>

      {/* Column 3: Display last sign-in time (formatted if available) */}
      <Col xs={24} md={12}>
        <Text strong>Last Sign In</Text> {/* Label */}
        <Text>{lastSignInTime ? formatDate(lastSignInTime) : "N/A"}</Text>
      </Col>

      {/* Column 4: Display provider type (static for now) */}
      <Col xs={24} md={12}>
        <Text strong>Provider</Text> {/* Label */}
        <Text>Email/Password</Text> {/* Static text */}
      </Col>
    </Row>
  </Card>
);

// Export the component so it can be used in other files
export default AccountInfoCard;
