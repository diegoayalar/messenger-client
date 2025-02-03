import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import LoginPage from './pages/Login';
import Chats from './pages/Chats';
import SignupPage from './pages/Signup';
import { isAuthenticated } from './utils/auth';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={isAuthenticated() ? <Chats /> : <LoginPage />}
                />
                <Route
                    path="/signup"
                    element={
                        isAuthenticated() ? (
                            <Navigate to={'/'} />
                        ) : (
                            <SignupPage />
                        )
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
