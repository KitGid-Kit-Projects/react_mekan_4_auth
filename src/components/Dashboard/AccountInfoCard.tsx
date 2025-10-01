import React from "react";
import { Card, Row, Col, Typography, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Props {
  uid?: string;
  emailVerified?: boolean;
  lastSignInTime?: string;
  formatDate: (date: string) => string;
}

const AccountInfoCard: React.FC<Props> = ({ uid, emailVerified, lastSignInTime, formatDate }) => (
  <Card
    title={
      <Space>
        <UserOutlined style={{ color: "#667eea" }} />
        <span>Account Information</span>
      </Space>
    }
    style={{
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    }}
  >
    <Row gutter={[24, 16]}>
      <Col xs={24} md={12}>
        <Text strong>User ID</Text>
        <Text code>{uid}</Text>
      </Col>
      <Col xs={24} md={12}>
        <Text strong>Email Verified</Text>
        <Text style={{ color: emailVerified ? "#52c41a" : "#ff4d4f" }}>
          {emailVerified ? "Yes" : "No"}
        </Text>
      </Col>
      <Col xs={24} md={12}>
        <Text strong>Last Sign In</Text>
        <Text>{lastSignInTime ? formatDate(lastSignInTime) : "N/A"}</Text>
      </Col>
      <Col xs={24} md={12}>
        <Text strong>Provider</Text>
        <Text>Email/Password</Text>
      </Col>
    </Row>
  </Card>
);

export default AccountInfoCard;
