import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "./Components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddEmployee from "./Pages/AddEmployee";
import ViewEmployee from "./Pages/ViewEmployee";
import EditEmployee from "./Pages/EditEmployee";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Layout/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/ViewEmployee" element={<ViewEmployee />} />
          <Route path="/updateEmployee/:id" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
