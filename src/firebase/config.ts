// Import Firebase core app initializer
import { initializeApp } from 'firebase/app'

// Import Firebase Authentication service
import { getAuth } from 'firebase/auth'

// ============================================
// 🔧 Firebase Configuration Setup
// ============================================
// You’ll replace the environment variable values below
// with your actual Firebase credentials from your Firebase console.

// Using Vite environment variables (prefixed with VITE_)
// ensures they are loaded securely from your .env file

const API_KEY = import.meta.env.VITE_API_KEY
const FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID
const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID
const FIREBASE_STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
const FIREBASE_MESSAGING_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
const FIREBASE_MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID

// ============================================
// 🧩 Firebase Config Object
// ============================================
// This configuration object connects your app to Firebase
const firebaseConfig = {
  apiKey: API_KEY, // Your unique Firebase API key
  authDomain: FIREBASE_AUTH_DOMAIN, // Firebase authentication domain
  projectId: FIREBASE_PROJECT_ID, // Project ID from Firebase console
  storageBucket: FIREBASE_STORAGE_BUCKET, // For storing files in Firebase Storage
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID, // For cloud messaging (notifications)
  appId: FIREBASE_APP_ID, // Unique app identifier
  measurementId: FIREBASE_MEASUREMENT_ID, // Optional: for analytics tracking
}

// ============================================
// 🚀 Initialize Firebase App
// ============================================
// This function connects your app instance with Firebase
const app = initializeApp(firebaseConfig)

// ============================================
// 🔐 Initialize Firebase Authentication
// ============================================
// Creates and exports the auth instance to handle user sign-in, sign-up, etc.
export const auth = getAuth(app)

// Default export (Firebase app instance)
export default app
