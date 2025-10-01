import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


interface LoginFormValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect target (default: dashboard)
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      await signIn(values.email, values.password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleLogin };
};
