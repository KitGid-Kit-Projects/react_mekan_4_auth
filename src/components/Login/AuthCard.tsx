import React from "react";
import { Card, Space, Typography, Divider, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const { Title, Text } = Typography;

interface Props {
  onSubmit: (values: { email: string; password: string }) => void;
  loading: boolean;
}

const AuthCard: React.FC<Props> = ({ onSubmit, loading }) => (
  <Card
    style={{
      width: "100%",
      maxWidth: 400,
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <div style={{ textAlign: "center" }}>
        <UserOutlined
          style={{ fontSize: "48px", color: "#667eea", marginBottom: "16px" }}
        />
        <Title level={2} style={{ margin: 0, color: "#262626" }}>
          Welcome Back
        </Title>
        <Text type="secondary">Sign in to your account</Text>
      </div>

      <LoginForm onSubmit={onSubmit} loading={loading} />

      <Divider style={{ margin: "8px 0" }}>
        <Text type="secondary" style={{ fontSize: "14px" }}>
          Don't have an account?
        </Text>
      </Divider>

      <Link to="/signup" style={{ textDecoration: "none" }}>
        <Button
          type="text"
          style={{
            width: "100%",
            height: "48px",
            borderRadius: "8px",
            color: "#667eea",
            fontWeight: "500",
          }}
        >
          Create New Account
        </Button>
      </Link>
    </Space>
  </Card>
);

export default AuthCard;
