import { useContext } from 'react';
import { AuthContext } from 'contexts';
import { UserAuthInformation } from 'types';

type UseAuthHook = {
    isLoggedIn: boolean;
    user: UserAuthInformation | null;
};

export const useAuth = (): UseAuthHook => {
    const { isLoggedIn, user } = useContext(AuthContext);

    return {
        isLoggedIn,
        user,
    };
};
