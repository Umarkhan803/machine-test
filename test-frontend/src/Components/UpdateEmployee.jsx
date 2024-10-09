import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateEmployee = ({ setImage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const [error, setError] = useState(false);
  const handleDropdownChange = (event) => {
    setDesignation(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setCourse(event.target.value);
  };
  const handleRadioChange = (event) => {
    setGender(event.target.value);
  };
  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid JPG or PNG file.");
    }
  };
  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5000/employee/${params.id}`);
    result = await result.json();
    setName(result.name);
    setEmail(result.email);
    setMobile(result.mobile);
    setDesignation(result.designation);
    setGender(result.gender);
    setCourse(result.course);
  };

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5000/employee/${params.id}`, {
      method: "Put",
      body: JSON.stringify({
        name,
        email,
        mobile,
        designation,
        gender,
        course,
      }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    result = await result.json();
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="addEmployee">
      <form className="employeeForm">
        <h1>Update Employee</h1>
        <input
          type="text"
          placeholder="Enter Employee name"
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
          type="email"
          placeholder="Enter employee email"
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
          placeholder="Enter Employee number"
          className="inputBox"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        {error && !mobile && (
          <span className="invalid-input">Enter valid mobile</span>
        )}
        <label>
          Designation
          <select value={designation} onChange={handleDropdownChange}>
            <option value="">--Select--</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </label>
        {error && !designation && (
          <span className="invalid-input">Enter valid designation</span>
        )}
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={handleRadioChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={handleRadioChange}
          />
          Female
        </label>

        {error && !gender && (
          <span className="invalid-input">Enter valid gender</span>
        )}
        <div>
          <label>
            <input
              type="checkbox"
              value="BCA"
              onChange={handleCheckboxChange}
            />
            BCA
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              value="BCom"
              onChange={handleCheckboxChange}
            />
            BCom
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              value="BBA"
              onChange={handleCheckboxChange}
            />
            BBA
          </label>
        </div>
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleImage}
        />

        <button onClick={updateProduct} className="addButton">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
