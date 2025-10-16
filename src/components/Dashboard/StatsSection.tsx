// Import React to define and render the component
import React from "react";

// Import layout and display components from Ant Design
import { Row, Col, Card, Statistic } from "antd";

// Import icons to visually represent each statistic
import { CalendarOutlined, TrophyOutlined, HeartOutlined } from "@ant-design/icons";

// Define TypeScript interface for component props
interface Props {
  daysActive: number; // Number of days the user has been active
}

// Define the functional React component named StatsSection
const StatsSection: React.FC<Props> = ({ daysActive }) => (
  // Row component for responsive layout with spacing (gutters) between items
  <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
    {/* --- CARD 1: Days Active --- */}
    <Col xs={24} sm={8}>
      {/* Card with gradient background and rounded corners */}
      <Card
        style={{
          borderRadius: "12px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
        }}
      >
        {/* Statistic component to display numeric data and title */}
        <Statistic
          // Title text with semi-transparent white color
          title={<span style={{ color: "rgba(255, 255, 255, 0.8)" }}>Days Active</span>}
          // Dynamic value showing daysActive prop
          value={daysActive}
          // Style for the numeric value
          valueStyle={{ color: "white", fontSize: "32px", fontWeight: "bold" }}
          // Calendar icon before the value
          prefix={<CalendarOutlined />}
        />
      </Card>
    </Col>

    {/* --- CARD 2: Account Status --- */}
    <Col xs={24} sm={8}>
      {/* Card with orange gradient background */}
      <Card
        style={{
          borderRadius: "12px",
          background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
          border: "none",
        }}
      >
        {/* Statistic component with static "Verified" text */}
        <Statistic
          title={<span style={{ color: "rgba(0, 0, 0, 0.6)" }}>Account Status</span>}
          value="Verified" // Static text since account is verified
          valueStyle={{ color: "#d17842", fontSize: "24px", fontWeight: "bold" }}
          prefix={<TrophyOutlined />} // Trophy icon before the value
        />
      </Card>
    </Col>

    {/* --- CARD 3: Security Level --- */}
    <Col xs={24} sm={8}>
      {/* Card with pastel blue-pink gradient */}
      <Card
        style={{
          borderRadius: "12px",
          background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
          border: "none",
        }}
      >
        {/* Statistic showing static "High" security level */}
        <Statistic
          title={<span style={{ color: "rgba(0, 0, 0, 0.6)" }}>Security Level</span>}
          value="High" // Static text for now
          valueStyle={{ color: "#2d9e8a", fontSize: "24px", fontWeight: "bold" }}
          prefix={<HeartOutlined />} // Heart icon before text
        />
      </Card>
    </Col>
  </Row>
);

// Export component for use in other files
export default StatsSection;
