import React from "react";

// Individual Employee Component
const Employee = ({ id, name, dob, role, onClick }) => {
  const handleClick = () => {
    onClick({ id, name, dob, role });
  };

  return (
    <table className="emp" onClick={handleClick}>
      <tbody>
        <tr>
          <td>EMP ID:</td> <td className="empd emp_id">{id}</td>
        </tr>
        <tr>
          <td>Name:</td> <td className="empd emp_Name">{name}</td>
        </tr>
        <tr>
          <td>DOB:</td> <td className="empd emp_DOB">{dob}</td>
        </tr>
        <tr>
          <td>Role:</td> <td className="empd emp_Role">{role}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Employee;
