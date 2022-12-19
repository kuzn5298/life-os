import { User as FirebaseUser } from 'firebase/auth';

import { BaseUserInfo } from 'types';

export const parseBasicUserInfo = (user: FirebaseUser | null): BaseUserInfo | null => {
    if (!user?.uid) return null;
    const { uid, email = null, photoURL = null, displayName = null } = user ?? {};

    return {
        uid,
        email,
        photoURL,
        username: displayName ?? email,
    };
};
