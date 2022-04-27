import { Routes, Route, useNavigate } from "react-router-dom";
// import useFetch from "./hooks/useFetch";
import { Dashboard, HomePage, Login, Signup, Blog } from "./pages";

function App() {
  const navigate = useNavigate();

  // const { data, error, loading } = useFetch("https://schema.getpostman.com/json/collection/v2.1.0/collection.json");
  // console.log(data)

  const signUp = () => {
    navigate("/signup");
  };
  const login = () => {
    navigate("/login");
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          exact
          path='/'
          element={<HomePage signUp={signUp} login={login} />}
        />
        <Route exact path='signup' element={<Signup login={login} />} />
        <Route exact path='login' element={<Login />} />
        <Route exact path='dashboard' element={<Dashboard />} />
        <Route exact path='blog' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App;
