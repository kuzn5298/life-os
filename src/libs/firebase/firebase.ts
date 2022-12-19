import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { firebaseConfig } from './firebase.config';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// services
export const auth = getAuth(app);

// providers
export const googleProvider = new GoogleAuthProvider();
