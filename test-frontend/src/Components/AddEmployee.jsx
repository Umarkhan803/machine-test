import React from "react";
import { useState } from "react";
function AddEmployee({ setFormData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");

  const [image, setImage] = useState(null);

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

  const handleFileChange = (event) => {
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

  const addEmployee = async () => {
    if (!name || !email || !mobile || !designation || !gender || !course) {
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
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    setFormData(image);
  };

  return (
    <div className="addEmployee">
      <form className="employeeForm">
        <h1>Add Employee</h1>
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
          Gender
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
          Course
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
          onChange={handleFileChange}
        />
        <button onClick={addEmployee} className="addButton">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
