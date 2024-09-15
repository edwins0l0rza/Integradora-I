import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

export function App() {
  function Logout() {
    localStorage.clear();
    return <Navigate to="login" />;
  }

  function RegisterAndLogout() {
    localStorage.clear();
    return <Register />;
  }

  return (
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}
