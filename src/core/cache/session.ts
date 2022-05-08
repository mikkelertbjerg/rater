import { SessionKey } from "./session.key"

const Session = () => {
    const get = <T>(key: SessionKey): T => {
        const item = sessionStorage.getItem(key);
        if (item === null) {
            throw new Error(`Item with key: ${key} does not exsists.`)
        };
        return JSON.parse(item) as T;
    };

    const set = <T>(key: SessionKey, item: T): void => {
        const value = JSON.stringify(item);
        sessionStorage.setItem(key, value);
    }

    return {
        get,
        set,
    };
};

export default Session;