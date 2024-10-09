import "./App.css";
import SignUp from "./Components/SignUp";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Employee from "./Components/Employee";
import AddEmployee from "./Components/AddEmployee";
import { useState } from "react";
import UpdateEmployee from "./Components/UpdateEmployee";
function App() {
  const [image, setImage] = useState(null);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AddEmployee setImage={setImage} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/update/:id"
            element={<UpdateEmployee setImage={setImage} />}
          />
          <Route path="/employee" element={<Employee image={image} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
