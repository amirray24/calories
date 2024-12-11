import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
  <>
  <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
  </>)
}

export default App;
