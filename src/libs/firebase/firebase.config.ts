import { FirebaseOptions } from 'firebase/app';
import { ActionCodeSettings } from 'firebase/auth';

import {
    AppRouteEnum,
    FIREBASE_API_KEY,
    FIREBASE_APP_ID,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_MEASUREMENT_ID,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
} from 'constpack';

export const firebaseConfig: FirebaseOptions = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
};

export const actionCodeConfig: ActionCodeSettings = {
    url: `${window.location.origin}${AppRouteEnum.VERIFICATION}`,
    handleCodeInApp: true,
};
