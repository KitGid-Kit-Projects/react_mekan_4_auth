import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from 'antd';


interface AuthFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

type Mode = 'login' | 'signup';

export const useAuthForm = (mode: Mode) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const onFinish = async (values: AuthFormValues) => {
    setLoading(true);
    try {
      if (mode === 'login') {

        navigate(from, { replace: true });
      } else {

        navigate('/dashboard');
      }
    } catch (error) {
      console.error(`${mode} error:`, error);
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, onFinish };
};
