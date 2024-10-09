import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Employee = ({ image }) => {
  const [employee, setEmployees] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    let result = await fetch("http://localhost:5000/employees", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    setEmployees(result);
  };

  const deleteEmployee = async (id) => {
    let result = await fetch(`http://localhost:5000/employee/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getEmployee();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setEmployees(result);
      }
    } else {
      getEmployee();
    }
  };
  return (
    <div className="employee">
      <h1>Employee list</h1>
      <input
        type=""
        className="search-employee-box"
        placeholder="Search Employee"
        onChange={searchHandle}
      />
      <div className="employee-list-container">
        <ul className="employee-header">
          <li>id</li>
          <li>img</li>
          <li>Name</li>
          <li>Email</li>
          <li>Mobile </li>
          <li>Designation</li>
          <li>Gender</li>
          <li>Course</li>
          <li>Created date</li>
          <li>Action</li>
        </ul>
        {employee.length > 0 ? (
          employee.map((item, index) => (
            <ul key={item._id} className="employee-list">
              <li>{index + 1}</li>
              <li>
                <img
                  src={image}
                  alt="profile "
                  style={{ width: "300px", height: "auto" }}
                />
              </li>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.mobile} </li>
              <li>{item.designation}</li>
              <li>{item.gender}</li>
              <li>{item.course}</li>
              <li> {currentDate.toDateString()}</li>
              <li>
                <button onClick={() => deleteEmployee(item._id)}>Delete</button>
                <Link to={"/update/" + item._id}>Update </Link>
              </li>
            </ul>
          ))
        ) : (
          <h1>No Result Found</h1>
        )}
      </div>
    </div>
  );
};

export default Employee;
