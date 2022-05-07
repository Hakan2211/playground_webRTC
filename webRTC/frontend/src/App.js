import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import RegisterPage from "./pages/auth/register/RegisterPage";
import Dashboard from "./pages/auth/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
}

export default App;
