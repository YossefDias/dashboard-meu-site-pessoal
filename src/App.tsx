import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import AuthRoutes from "./Routes/AuthRoutes";
import { AuthProvider } from "./Context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AuthRoutes />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
