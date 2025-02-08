import { validateToken } from '../api/auth';

export const isAuthenticated = async (): Promise<boolean> => {
    try {
        return await validateToken();
    } catch (error) {
        return false;
    }
};
