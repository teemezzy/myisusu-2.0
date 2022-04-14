import { Routes, Route, useNavigate } from "react-router-dom";
import { HomePage, Login, Signup } from "./pages";

function App() {
  const navigate = useNavigate();

  const signUp = () => {
    navigate("/signup");
  };
  const login = () => {
    navigate("/login");
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage signUp={signUp} login={login} />} />
        <Route exact path="signup" element={<Signup login={login} />} />
        <Route exact path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
