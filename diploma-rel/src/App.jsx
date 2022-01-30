import React, { useCallback, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./Login/Login.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import Home from "./Home/Home.jsx";

const ProtectedElement = ({ backward, statement, children }) =>
  statement ? children : <Navigate to={backward} />;

const App = () => {
  const [auth, setAuth] = useState(localStorage.getItem("auth-token"));

  const onAuthUpdate = useCallback((value) => {
    setAuth(value);
    value
      ? localStorage.setItem("auth-token", value)
      : localStorage.removeItem("auth-token");
      window.history.pushState({}, undefined, '/login');
  }, []);
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectedElement backward="/" statement={!auth}>
            <Login />
          </ProtectedElement>
        }
      />
      <Route
        path="/signup"
        element={
          <ProtectedElement backward="/" statement={!auth}>
            <SignUp />
          </ProtectedElement>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedElement backward="/login" statement={auth}>
            <Home onLogout={onAuthUpdate} />
          </ProtectedElement>
        }
      />
    </Routes>
  );
};

export default App;
