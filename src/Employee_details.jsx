import React from "react";

const EmployeeDetails = ({ employee }) => {
  return (
    <div>
      <table className="emp">
        <tbody>
          <tr>
            <td>EMP ID:</td> <td className="empd emp_id">{employee.id}</td>
          </tr>
          <tr>
            <td>Name:</td> <td className="empd emp_Name">{employee.name}</td>
          </tr>
          <tr>
            <td>DOB:</td> <td className="empd emp_DOB">{employee.dob}</td>
          </tr>
          <tr>
            <td>Role:</td> <td className="empd emp_Role">{employee.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
