const express = require("express");
const mongoose = require("mongoose");
const employeeRoutes = require("./controller/EmployeeRoutes");
const cors = require("cors");
mongoose.set("strictQuery", true);
const app = express();

mongoose.set("strictQuery", true);
const uri =
  "mongodb+srv://arikerig:12345@cluster0.h6dibsq.mongodb.net/EmployeeManagement";

mongoose.connect(uri);
const db = mongoose.connection;
db.on("open", () => {
  console.log("database connected");
});

app.get("/", (req, res) => {
  res.write("hello baby from server");
  res.end("hi");
});
  
app.use(express.json());
app.use(cors());
app.use("/employees", employeeRoutes);

const port = 4000;
app.listen(port, () => {
  console.log("server started on ", port);
});
