import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  HomePage,
  Login,
  Signup,
  Blog,
  Dashboard,
  Savings,
  Vault,
  ReferralID,
  Calculator,
} from "./pages";
import { SideLayout } from "./component";

function App() {
  const navigate = useNavigate();

  const signUp = () => {
    navigate("/signup");
  };
  const login = () => {
    navigate("/login");
  };

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage signUp={signUp} login={login} />}
        />
        <Route exact path="signup" element={<Signup login={login} />} />
        <Route exact path="login" element={<Login />} />
        <Route element={<SideLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="savings" element={<Savings />} />
          <Route path="vault" element={<Vault />} />
          <Route path="ref_id" element={<ReferralID />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
        <Route exact path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
