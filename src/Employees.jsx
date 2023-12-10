import React, { useState } from "react";
import Employee from "./Employee";
import Employee_details from "./Employee_details";
import moptro_logo from "/moptro_logo.png";
import call from "/call.png";

// Employees Component displaying multiple employees
const Employees = () => {
  const employeesData = [
    {
      id: 1,
      name: "John Doe",
      dob: "15-01-1990",
      role: "Developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      dob: "20-05-1988",
      role: "Designer",
    },
    {
      id: 3,
      name: "Alice Johnson",
      dob: "10-03-1992",
      role: "Engineer",
    },
    {
      id: 4,
      name: "Bob Williams",
      dob: "05-09-1995",
      role: "Analyst",
    },
    {
      id: 5,
      name: "Eva Brown",
      dob: "18-11-1987",
      role: "Manager",
    },
    {
      id: 6,
      name: "Tom Clark",
      dob: "23-07-1993",
      role: "Developer",
    },
    {
      id: 7,
      name: "Sophia Lee",
      dob: "07-04-1996",
      role: "Designer",
    },
    {
      id: 8,
      name: "Oliver Garcia",
      dob: "29-12-1991",
      role: "Engineer",
    },
    {
      id: 9,
      name: "Isabella Rodriguez",
      dob: "14-08-1994",
      role: "Analyst",
    },
    {
      id: 10,
      name: "Liam Martinez",
      dob: "02-06-1989",
      role: "Manager",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = employeesData.filter((employee) =>
      employee.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="employees_screen">
      <div className="call_container">
        <img src={call} alt="call_button" className="call_button" />
      </div>
      <div className="moptro_container">
        <div className="moptro_number_container">
          <div className="moptro_number">4</div>
        </div>

        <img src={moptro_logo} alt="" className="moptro_logo" />
      </div>
      <div className="emps_container">
        <div className="input_box">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="search_input"
          />
        </div>
        <div className="emp_list">
          {selectedEmployee ? (
            <Employee_details employee={selectedEmployee} />
          ) : (
            searchResults.map((employee) => (
              <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                dob={employee.dob}
                role={employee.role}
                onClick={handleEmployeeClick}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Employees;
