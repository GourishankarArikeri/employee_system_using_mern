import React, { useState } from "react";
import Layout from "../Components/Layout";
import "./AddEmployee.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../images/image1.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [FirstName, setFirstName] = useState("");
  const [EmpId, setEmpId] = useState();
  const [LastName, setLastName] = useState("");
  const [Contact, setContact] = useState();
  const [Email, setEmail] = useState("");
  const navi = useNavigate();

  const handlesubmit = (event) => {
    const obj = { EmpId, FirstName, LastName, Contact, Email };
    console.log(obj);
    const url = "http://localhost:4000/employees/add-employee";
    Axios.post(url, obj)
      .then((res) => {
        if (res.status === 200) {
          alert("employee added successfully");
          navi("/");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };

  // console.log(obj);
  // event.preventDefault();

  return (
    <div>
      <Layout>
        <div className="addemployee">
          <h1>AddEmployee</h1>
          <Container className="grid-container">
            <Row className="grid-row">
              <Col>
                <img src={image1} alt="/" />
              </Col>
              <Col>
                <form onSubmit={handlesubmit}>
                  <label for="EmpID">EmployeeID</label>
                  <input
                    id="EmpID"
                    type="number"
                    placeholder="enter Employee id"
                    class="form-control"
                    onChange={(e) => {
                      setEmpId(e.target.value);
                    }}
                  />
                  <label for="firstName">Firstname</label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="enter FirstName"
                    class="form-control"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <label for="lastname">Lastname</label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="enter LastName"
                    class="form-control"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  <label for="contact">contact</label>
                  <input
                    id="contact"
                    type="number"
                    placeholder="enter contact"
                    class="form-control"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                  <label for="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="enter Email"
                    class="form-control"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <input type="submit" id="sub-btn" />
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
}

export default AddEmployee;
