import { FirebaseError } from 'firebase/app';

export const getFirebaseCodeError = (e: unknown): string | null => {
    const name = (e as FirebaseError)?.name;
    if (name === 'FirebaseError') {
        const code = (e as FirebaseError)?.code;
        return code;
    }
    return null;
};
