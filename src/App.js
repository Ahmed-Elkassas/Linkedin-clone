import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./Pages/Login/LoginPage";
// styles

import "./App.css";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="" element={<Navigate replace to="/home" />} /> */}
        <Route
          path="/home"
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
