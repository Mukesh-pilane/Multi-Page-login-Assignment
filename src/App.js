import React, { useEffect } from "react";
import SignUpForm from "./pages/SignUp";
import Home from "./pages/Home";
import SignupStep from "./Components/SignupStep";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const userSession = JSON.parse(localStorage.getItem("userSession"));
    if (!userSession) {
      navigate("/signup");
    }
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/getStarted' element={<SignupStep />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
