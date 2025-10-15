// Import Firebase core functions
import { initializeApp } from 'firebase/app'; // Initializes your Firebase app instance
import { getAuth } from 'firebase/auth'; // Provides access to Firebase Authentication service

// --- Firebase configuration setup ---

// These values come from your environment variables (Vite uses import.meta.env)
// You should define these in a .env file to keep sensitive data safe
const API_KEY = import.meta.env.VITE_API_KEY; // Firebase API key
const FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID; // Unique App ID for your Firebase project
const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN; // Domain for Firebase Authentication
const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID; // Firebase project ID
const FIREBASE_STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET; // Cloud Storage bucket name
const FIREBASE_MESSAGING_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID; // Sender ID for Firebase Cloud Messaging
const FIREBASE_MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID; // Optional: Google Analytics measurement ID

// Create a Firebase configuration object using the above variables
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// --- Initialize Firebase ---
// This creates and configures your Firebase application instance
const app = initializeApp(firebaseConfig);

// --- Initialize Firebase Authentication ---
// This sets up Firebase Authentication and links it with your app
export const auth = getAuth(app);

// Export the Firebase app instance as default
export default app;
