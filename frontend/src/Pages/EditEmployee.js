import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AddEmployee.css";
import image1 from "../images/image1.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

function EditEmployee() {
  const [FirstName, setFirstName] = useState("");
  const [EmpId, setEmpId] = useState();
  const [LastName, setLastName] = useState("");
  const [Contact, setContact] = useState();
  const [Email, setEmail] = useState("");
  let obj = useParams(); // original data
  console.log("obj", obj);

  const navigate = useNavigate()

  useEffect(() => {
    let url = "http://localhost:4000/employees/updateEmployee/";
    let id = obj.id;
    Axios.get(url + id).then((res) => {
      console.log(res.data);
      setEmpId(res.data.EmpId);
      setFirstName(res.data.FirstName);
      setLastName(res.data.LastName);
      setContact(res.data.Contact);
      setEmail(res.data.Email);
    });
  }, [obj.id]);

  const handlesubmit = () => {
    const obj2 = { EmpId, FirstName, LastName, Contact, Email };
    console.log(obj2)
    let url = "http://localhost:4000/employees/updateEmployee/"+obj.id;
    Axios.put(url,obj2)
    .then((res) => {
      if (res.status === 200){
        alert("employee updated successfully");
        navigate("/ViewEmployee")

      }
      else{
        Promise.reject();
      }
    

    })
  
    .catch((err)=>{
    console.log(err)
    })
  };

  return (
    <div>
      <Layout>
        <div className="addemployee">
          <h1>Edit Employee</h1>
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
                    defaultValue={EmpId}
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
                    defaultValue={FirstName}
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
                    defaultValue={LastName}
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
                    defaultValue={Contact}
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
                    defaultValue={Email}
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

export default EditEmployee;
