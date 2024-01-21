import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import axios from "axios";
import ViewRow from "./ViewRow";
import './ViewEmployee.css'

function ViewEmployee() {
  const [employee, setemployee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/employees")

      .then((res) => {
        setemployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const TableData = () => {
    return employee.map((emp) => {
      return <ViewRow obj={emp} />;
    });
  };

  return (
    <div>
      <Layout>
        <table>
          <thead>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Contact</th>
            <th>Action</th>
          </thead>
          <tbody>{TableData()}</tbody>
        </table>
      </Layout>
    </div>
  );
}

export default ViewEmployee;
