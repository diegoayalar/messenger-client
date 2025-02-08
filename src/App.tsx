import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import LoginPage from './pages/Login';
import Chats from './pages/Chats';
import SignupPage from './pages/Signup';
import { useAuth } from './context/AuthContext';

const App = () => {
    const { authenticated } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={authenticated ? <Chats /> : <LoginPage />}
                />
                <Route
                    path="/signup"
                    element={
                        authenticated ? <Navigate to={'/'} /> : <SignupPage />
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
