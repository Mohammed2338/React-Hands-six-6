import React, { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AddNew from "./AddNew";
import Table from "./table";
import Mycontext from "./ContextData";
import Edit from "./Edit";
// import Mycontext from './ContextData';
// import Student from './Student';
function App() {
  const [data, setData] = useState(
    [
      {
        name: "Mohammed Fasiuddin",
        Age: 24,
        Course: "MERN",
        Batch: "February",
      },
      { name: "Mohammed Hafeez", Age: 22, Course: "MERN", Batch: "January" },
      { name: "Narendra ", Age: 29, Course: "MERN", Batch: "July" },
      { name: "Quyyum", Age: 26, Course: "MERN", Batch: "December" },
      { name: "John wick", Age: 30, Course: "MERN", Batch: "February" },
      { name: "Mahesh", Age: 28, Course: "MERN", Batch: "November" },
    ],
    []
  );
  return (
    <div className="App">
      <div className="navbar">
        <Link to="./Home" className="link">
          Home
        </Link>
        <Link to="./Student" className="link">
          Student
        </Link>
        <Link to="./ContactUs" className="link">
          ContactUs
        </Link>
      </div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Student"
          element={
            <Mycontext.Provider value={{ entries: data, update: setData }}>
              <Table />
            </Mycontext.Provider>
          }
        />
        <Route
          path="/NewStudent"
          element={
            <Mycontext.Provider value={{ entries: data, update: setData }}>
              <AddNew />
            </Mycontext.Provider>
          }
        />
        <Route
          path="/changeData"
          element={
            <Mycontext.Provider value={{ entries: data, update: setData }}>
              <Edit />
            </Mycontext.Provider>
          }
        />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
