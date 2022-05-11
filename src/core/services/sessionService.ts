import { Session } from "../../models/session/session";


const route = "https://localhost:7098/session";

const sessionService = () => {
    const get = async (): Promise<Session> => {
        const response = await fetch(route, { method: 'GET' });
        const { data, error } = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, message ${error.message}`);
        }
        return data as Session;
    }

    const create = async (): Promise<Session> => {
        const response = await fetch(route, { method: 'POST' });
        const { data, error } = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, message ${error.message}`);
        }
        return data as Session;

    }

    return {
        get,
        create,
    }
}

export default sessionService;