import logo from "./logo.svg";
import "./App.css";
import React from "react";
import UploadButton from "./UploadButton.jsx";
import Title from "./Title.jsx";
function App() {
  return (
    <div>
      <Title text="ScanSync" size="h1" />
      <UploadButton />
    </div>
  );
}

export default App;
