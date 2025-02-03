import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignupPage from './pages/Signup';
import { isAuthenticated } from './utils/auth';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={isAuthenticated() ? <Dashboard /> : <LoginPage />}
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
