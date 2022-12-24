import { User as FirebaseUser } from 'firebase/auth';

import { BaseUserInfo } from 'types';

export const parseBasicUserInfo = (user: FirebaseUser): BaseUserInfo => {
    const { uid, email = null, photoURL = null, displayName = null } = user ?? {};

    return {
        uid,
        email,
        photoURL,
        username: displayName ?? email,
    };
};
