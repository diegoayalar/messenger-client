export const logIn = async (email: string, password: string): Promise<void> => {
    const response = await fetch('http://localhost:7279/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    });

    if (!response.ok) throw new Error(await response.text());
};

export const signUp = async (
    email: string,
    password: string,
    username: string
): Promise<void> => {
    const response = await fetch('http://localhost:7279/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
        credentials: 'include',
    });

    if (!response.ok) throw new Error(await response.text());
};

export const validateToken = async (): Promise<boolean> => {
    const response = await fetch(
        'http://localhost:7279/api/auth/validate-token',
        {
            method: 'POST',
            credentials: 'include',
        }
    );

    if (!response.ok) return false;

    return true;
};

