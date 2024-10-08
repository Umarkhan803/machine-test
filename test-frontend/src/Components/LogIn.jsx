import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const handelLogin = async () => {
    console.log(email, password);
    let result = await fetch("", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("auth", JSON.stringify(result.auth));
    navigate("/employee");
  };
  return (
    <div className="signUp">
      <form className="form">
        <h1>Log In </h1>

        <div>
          <label>Email:-</label>
          <input type="email" placeholder="Enter Your Email" required />
        </div>
        <div>
          <label>Password:-</label>
          <input type="password" placeholder="Enter Your password" required />
        </div>
        <button onClick={handelLogin} className="submit-btn">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LogIn;
