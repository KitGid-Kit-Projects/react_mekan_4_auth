import AuthCard from "@/components/Login/AuthCard";
import { useLogin } from "@/hooks/Login/useLogin";
import React from "react";


const Login: React.FC = () => {
  const { loading, handleLogin } = useLogin();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <AuthCard onSubmit={handleLogin} loading={loading} />
    </div>
  );
};

export default Login;
