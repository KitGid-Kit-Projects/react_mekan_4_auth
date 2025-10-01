import React from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

interface Props {
  onSubmit: (values: { email: string; password: string }) => void;
  loading: boolean;
}

const LoginForm: React.FC<Props> = ({ onSubmit, loading }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="login"
      onFinish={onSubmit}
      layout="vertical"
      size="large"
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder="Enter your email"
          style={{ borderRadius: "8px" }}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 6, message: "Password must be at least 6 characters!" },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Enter your password"
          style={{ borderRadius: "8px" }}
        />
      </Form.Item>

      <Form.Item style={{ marginBottom: "16px" }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{
            width: "100%",
            height: "48px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            border: "none",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
