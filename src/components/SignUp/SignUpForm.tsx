import React from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAuthForm } from '@/hooks/SignUp/useAuthForm';

const { Text } = Typography;

const SignUpForm: React.FC = () => {
  const { form, loading, onFinish } = useAuthForm('signup');

  return (
    <>
      <Form form={form} name="signup" onFinish={onFinish} layout="vertical" size="large">
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Enter valid email!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Enter your email" style={{ borderRadius: '8px' }} />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }, { min: 6, message: 'Min 6 characters!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" style={{ borderRadius: '8px' }} />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) return Promise.resolve();
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Confirm your password" style={{ borderRadius: '8px' }} />
        </Form.Item>

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            loading={loading}
            style={{ width: '100%', height: '48px', borderRadius: '8px', background: 'linear-gradient(135deg, #667eea, #764ba2)', border: 'none', fontSize: '16px', fontWeight: '500' }}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </Form.Item>
      </Form>

      <Divider><Text type="secondary" style={{ fontSize: '14px' }}>Already have an account?</Text></Divider>

      <Link to="/login">
        <Button type="text" style={{ width: '100%', height: '48px', borderRadius: '8px', color: '#667eea', fontWeight: '500' }}>
          Sign In Instead
        </Button>
      </Link>
    </>
  );
};

export default SignUpForm;
