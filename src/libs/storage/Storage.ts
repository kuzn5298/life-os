/* eslint-disable @typescript-eslint/no-explicit-any */
type LocalStorage = {
    [key: string]: string;
};

const store: LocalStorage = typeof localStorage === 'object' ? localStorage : {};

type Storage = {
    set(key: string, value: any): void;
    get(key: string): any;
    remove(key: string): void;
};

const storage: Storage = {
    set(key, value) {
        const serialize = JSON.stringify(value);
        store[key] = serialize;
    },
    get(key) {
        if (!store[key]) return null;
        const value = store[key];
        try {
            const deserialize = JSON.parse(value);
            return deserialize;
        } catch (e) {
            return value;
        }
    },
    remove(key) {
        delete store[key];
    },
};

export default storage;
