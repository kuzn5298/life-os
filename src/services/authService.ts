import {
    sendSignInLinkToEmail as firebaseSendSignInLinkToEmail,
    signInWithEmailLink as firebaseSignInWithEmailLink,
    signInWithPopup as firebaseSignInWithPopup,
    signOut as firebaseSignOut,
    isSignInWithEmailLink as firebaseIsSignInWithEmailLink,
    onAuthStateChanged as firebaseOnAuthStateChanged,
    Unsubscribe,
    User as FirebaseUser,
} from 'firebase/auth';

import { ProviderEnum } from 'constpack';
import { userService } from 'services';
import { BaseUserInfo, UserAuthInformation } from 'types';
import { auth, googleProvider, actionCodeConfig } from 'libs/firebase';

// email
export const isSignInWithEmailLink = (): boolean =>
    firebaseIsSignInWithEmailLink(auth, window.location.href);
export const sendSignInLinkToEmail = (email: string): Promise<void> =>
    firebaseSendSignInLinkToEmail(auth, email, actionCodeConfig);
export const signInByEmailLink = async (email: string): Promise<BaseUserInfo> => {
    const { user } = await firebaseSignInWithEmailLink(auth, email, window.location.href);
    return userService.parseBasicUserInfo(user);
};

// providers
const signInByGoogle = async (): Promise<BaseUserInfo> => {
    const { user } = await firebaseSignInWithPopup(auth, googleProvider);
    return userService.parseBasicUserInfo(user);
};

// general
export const signInByProvider = async (provider: ProviderEnum): Promise<BaseUserInfo> => {
    switch (provider) {
        case ProviderEnum.GOOGLE:
            return signInByGoogle();
        default:
            throw Error('This provider is not registered');
    }
};

// subscription
export const authStateChangeSubscription = (
    callback: (user: UserAuthInformation | null) => void
): Unsubscribe | null => {
    const unsubscribe = firebaseOnAuthStateChanged(
        auth,
        async (user: FirebaseUser | null): Promise<void> => {
            const baseUserInformation = user && userService.parseBasicUserInfo(user);
            callback(baseUserInformation);
        }
    );
    return unsubscribe;
};

export const signOut = async (): Promise<void> => {
    await firebaseSignOut(auth);
};
