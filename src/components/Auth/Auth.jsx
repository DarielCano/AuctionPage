import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register";

const Auth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default Auth;
