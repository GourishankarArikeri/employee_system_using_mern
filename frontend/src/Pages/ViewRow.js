import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ViewRow(props) {
  console.log(props.obj["_id"]);
  const deleteEmployee = () => {
    const url = "http://localhost:4000/employees/deleteemployee/";
    axios.delete(url + props.obj._id).then((res) => {
      if (res.status === 200) {
        alert("employee deleted successfully");
        window.location.reload();
      } else {
        Promise.reject();
      }
    });
  };
  return (
    <tr>
      <td>{props.obj.EmpId}</td>
      <td> {props.obj.FirstName} </td>
      <td>{props.obj.LastName}</td>
      <td>{props.obj.Email}</td>
      <td>{props.obj.Contact}</td>
      <td>
        <button id="delete" onClick={deleteEmployee}>
          Delete
        </button>
        <Link to={`/updateEmployee/${props.obj._id}`}>
          <button id="edit">Edit</button>
        </Link>
      </td>
    </tr>
  );
}

export default ViewRow;
