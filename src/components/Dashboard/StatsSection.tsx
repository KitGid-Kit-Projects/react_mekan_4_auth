import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import { CalendarOutlined, TrophyOutlined, HeartOutlined } from "@ant-design/icons";

interface Props {
  daysActive: number;
}

const StatsSection: React.FC<Props> = ({ daysActive }) => (
  <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
    <Col xs={24} sm={8}>
      <Card
        style={{
          borderRadius: "12px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
        }}
      >
        <Statistic
          title={<span style={{ color: "rgba(255, 255, 255, 0.8)" }}>Days Active</span>}
          value={daysActive}
          valueStyle={{ color: "white", fontSize: "32px", fontWeight: "bold" }}
          prefix={<CalendarOutlined />}
        />
      </Card>
    </Col>

    <Col xs={24} sm={8}>
      <Card
        style={{
          borderRadius: "12px",
          background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
          border: "none",
        }}
      >
        <Statistic
          title={<span style={{ color: "rgba(0, 0, 0, 0.6)" }}>Account Status</span>}
          value="Verified"
          valueStyle={{ color: "#d17842", fontSize: "24px", fontWeight: "bold" }}
          prefix={<TrophyOutlined />}
        />
      </Card>
    </Col>

    <Col xs={24} sm={8}>
      <Card
        style={{
          borderRadius: "12px",
          background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
          border: "none",
        }}
      >
        <Statistic
          title={<span style={{ color: "rgba(0, 0, 0, 0.6)" }}>Security Level</span>}
          value="High"
          valueStyle={{ color: "#2d9e8a", fontSize: "24px", fontWeight: "bold" }}
          prefix={<HeartOutlined />}
        />
      </Card>
    </Col>
  </Row>
);

export default StatsSection;
