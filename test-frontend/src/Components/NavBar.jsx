import React from "react";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  let navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logOut = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <nav className="navbar">
      <h1>Logo .</h1>
      {auth ? (
        <ul>
          <li>
            <Link to={"/employee"}>Employee</Link>
          </li>
          <li>
            <Link to={"/"}> Add Employee</Link>
          </li>

          <li onClick={logOut}>
            <Link to={"/logout"}>Log out</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to={"/login"}>Login </Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
