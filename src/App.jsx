import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./components/PublicLayout/PublicLayout";
import PrivateLayout from "./components/PrivateLayout/PrivateLayout";

import "./App.css";
import Auth from "./components/Auth/Auth";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/*" element={<PublicLayout />} />
          <Route path="/admin" element={<PrivateLayout />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
