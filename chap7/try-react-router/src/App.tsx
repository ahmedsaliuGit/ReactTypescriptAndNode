import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import ScreenC from "./ScreenC";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ScreenA />} />
      <Route path="/b" element={<ScreenB />} />
      <Route
        path="/c/:userid"
        element={<ScreenC message="Screen C message" />}
      />
    </Routes>
  );
}

export default App;
