// Import React to define the functional component
import React from "react";

// Import Ant Design UI components for layout and styling
import { Card, Space, Avatar, Typography } from "antd";

// Import icons for user, mail, and calendar visuals
import { UserOutlined, MailOutlined, CalendarOutlined } from "@ant-design/icons";

// Extract typography components for cleaner code
const { Title, Text } = Typography;

// Define the TypeScript interface for the component props
interface Props {
  email?: string; // Optional user email address
  creationTime?: string; // Optional account creation date
  formatDate: (date: string) => string; // Function to format date strings
}

// Define the functional React component
const WelcomeCard: React.FC<Props> = ({ email, creationTime, formatDate }) => (
  // Main Card container with padding, rounded corners, and subtle shadow
  <Card
    style={{
      marginBottom: "24px", // Space below the card
      borderRadius: "12px", // Rounded corners for modern look
      background: "white", // White background for contrast
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)", // Light shadow for depth
    }}
  >
    {/* Use Space to align avatar and text horizontally with spacing */}
    <Space size="large" style={{ width: "100%" }}>
      {/* Avatar with gradient background and user icon */}
      <Avatar
        size={80} // Large circular avatar
        icon={<UserOutlined />} // User icon in the center
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient background
          display: "flex", // Flex for proper icon centering
          alignItems: "center",
          justifyContent: "center",
        }}
      />

      {/* Text content next to the avatar */}
      <div>
        {/* Greeting title */}
        <Title level={2} style={{ margin: 0, color: "#262626" }}>
          Welcome back! 🎉
        </Title>

        {/* Space vertically stacks email and member info */}
        <Space direction="vertical" size="small">
          {/* --- Row 1: Email information --- */}
          <Space>
            {/* Mail icon */}
            <MailOutlined style={{ color: "#667eea" }} />
            {/* Display user's email */}
            <Text strong>{email}</Text>
          </Space>

          {/* --- Row 2: Membership creation date --- */}
          <Space>
            {/* Calendar icon */}
            <CalendarOutlined style={{ color: "#667eea" }} />
            {/* Display formatted creation date or fallback text */}
            <Text type="secondary">
              Member since {creationTime ? formatDate(creationTime) : "N/A"}
            </Text>
          </Space>
        </Space>
      </div>
    </Space>
  </Card>
);

// Export the component for use in other parts of the app
export default WelcomeCard;
