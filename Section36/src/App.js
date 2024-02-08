import logo from "./logo.svg";
import "./App.css";
import React from "react";
import UploadButton from "./UploadButton.jsx";
import Title from "./Title.jsx";
import { customStyle } from "./index.js";

function App() {
  return (
    <div>
      <Title text="ScanSync" size="h1" />
      <UploadButton />
      <h1 style={customStyle}>This is my application</h1>
    </div>
  );
}

export default App;
