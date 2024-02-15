import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./components/LoginPage/SignUp";

const ProjectRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/forgotPW" element={<ForgotPassword />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </Router>
    )
}

export default ProjectRoutes;