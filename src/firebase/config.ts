import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
// Replace these values with your actual Firebase project configuration
const API_KEY = import.meta.env.VITE_API_KEY;
const FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID;
// Firebase Configuration
const firebaseConfig = {
  apiKey:API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket:FIREBASE_STORAGE_BUCKET,
  messagingSenderId:FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID ,
  measurementId:FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;