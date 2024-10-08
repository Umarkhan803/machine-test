import "./App.css";
import SignUp from "./Components/SignUp";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Employee from "./Components/Employee";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
