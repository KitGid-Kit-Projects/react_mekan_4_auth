import React from "react";
import { Card, Space, Avatar, Typography } from "antd";
import { UserOutlined, MailOutlined, CalendarOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface Props {
  email?: string;
  creationTime?: string;
  formatDate: (date: string) => string;
}

const WelcomeCard: React.FC<Props> = ({ email, creationTime, formatDate }) => (
  <Card
    style={{
      marginBottom: "24px",
      borderRadius: "12px",
      background: "white",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    }}
  >
    <Space size="large" style={{ width: "100%" }}>
      <Avatar
        size={80}
        icon={<UserOutlined />}
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <div>
        <Title level={2} style={{ margin: 0, color: "#262626" }}>
          Welcome back! 🎉
        </Title>
        <Space direction="vertical" size="small">
          <Space>
            <MailOutlined style={{ color: "#667eea" }} />
            <Text strong>{email}</Text>
          </Space>
          <Space>
            <CalendarOutlined style={{ color: "#667eea" }} />
            <Text type="secondary">
              Member since {creationTime ? formatDate(creationTime) : "N/A"}
            </Text>
          </Space>
        </Space>
      </div>
    </Space>
  </Card>
);

export default WelcomeCard;
