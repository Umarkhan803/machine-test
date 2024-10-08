import React from "react";
import { useState } from "react";
function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [img, setImg] = useState();
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (
      !name ||
      !email ||
      !mobile ||
      !designation ||
      !gender ||
      !course ||
      !img
    ) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-employee", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        mobile,
        designation,
        gender,
        course,
        img,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span className="invalid-input">Enter valid name</span>
      )}
      <input
        type="text"
        placeholder="Enter product price"
        className="inputBox"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {error && !email && (
        <span className="invalid-input">Enter valid Email</span>
      )}
      <input
        type="number"
        placeholder="Enter product category"
        className="inputBox"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      {error && !mobile && (
        <span className="invalid-input">Enter valid mobile</span>
      )}
      <input
        type="email"
        placeholder="Enter product company"
        className="inputBox"
        value={designation}
        onChange={(e) => {
          setDesignation(e.target.value);
        }}
      />
      {error && !designation && (
        <span className="invalid-input">Enter valid designation</span>
      )}
      <input
        type="text"
        placeholder="Enter product company"
        className="inputBox"
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      {error && !gender && (
        <span className="invalid-input">Enter valid gender</span>
      )}{" "}
      <input
        type="text"
        placeholder="Enter product company"
        className="inputBox"
        value={course}
        onChange={(e) => {
          setCourse(e.target.value);
        }}
      />
      {error && !setCourse && (
        <span className="invalid-input">Enter valid course</span>
      )}
      <button onClick={addProduct} className="appButton">
        Add Product
      </button>
    </div>
  );
}

export default AddEmployee;
