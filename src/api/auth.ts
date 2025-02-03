export const logIn = async (
    email: string,
    password: string
): Promise<string> => {
    const response = await fetch('http://localhost:7279/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error(await response.text());
    }

    const data = await response.json();

    return data.Token;
};

export const signUp = async (
    email: string,
    password: string,
    username: string
): Promise<string> => {
    const response = await fetch('http://localhost:7279/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
    });

    if (!response.ok) {
        throw new Error(await response.text());
    }

    const data = await response.json();

    return data.Token;
}