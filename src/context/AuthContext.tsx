import React, { createContext, useContext, useState } from 'react';
import {
  User,
  signInWithEmailAndPassword,
  UserCredential
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { message } from 'antd';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<UserCredential>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);



  // Sign in function
  const signIn = async (email: string, password: string): Promise<UserCredential> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Store user token in localStorage
      const token = await userCredential.user.getIdToken();
      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', userCredential.user.uid);
      
      message.success('Signed in successfully!');
      return userCredential;
    } catch (error: any) {
      message.error(error.message || 'Failed to sign in');
      throw error;
    }
  };



  const value: AuthContextType = {
    currentUser,
    loading,
    signIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};