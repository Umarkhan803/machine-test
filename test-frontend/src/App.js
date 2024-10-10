import "./App.css";
import SignUp from "./Components/SignUp";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Employee from "./Components/Employee";
import AddEmployee from "./Components/AddEmployee";
import { useState } from "react";
import UpdateEmployee from "./Components/UpdateEmployee";
import PrivateComponent from "./Components/PrivateComponent";
function App() {
  const [formData, setFormData] = useState({
    photo: null,
  });

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route
              path="/employee"
              element={<Employee formData={formData} />}
            />
            <Route
              path="/update/:id"
              element={<UpdateEmployee setFormData={setFormData} />}
            />
          </Route>
          <Route
            path="/"
            element={
              <AddEmployee formData={formData} setFormData={setFormData} />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
