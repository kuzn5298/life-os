export interface BaseUserInfo {
    uid: string;
    email: string | null;
    photoURL: string | null;
    username: string | null;
}

export type UserAuthInformation = BaseUserInfo;
