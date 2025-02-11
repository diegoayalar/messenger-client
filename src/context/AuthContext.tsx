import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useContext,
} from 'react';
import { isAuthenticated } from '../utils/auth';

interface AuthContextType {
    authenticated: boolean;
    loading: boolean;
    refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const refreshAuth = async () => {
        setLoading(true);
        setAuthenticated(await isAuthenticated());
        setLoading(false);
    };

    useEffect(() => {
        refreshAuth();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ authenticated, loading, refreshAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
