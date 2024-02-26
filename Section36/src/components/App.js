import "../App.css";
import React from "react";
import UploadButton from "./UploadButton.jsx";
import Title from "./Title.jsx";
import Heading from "./Heading.jsx";

function App() {
  return (
    <div>
      <Title text="ScanSync" size="h1" />
      <UploadButton />
      <Heading /> <h1>This is my application</h1>
    </div>
  );
}

export default App;
