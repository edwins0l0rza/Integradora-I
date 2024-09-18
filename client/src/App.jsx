import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";


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
