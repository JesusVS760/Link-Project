import "./App.css";

import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LinkInput from "./components/LinkInput";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <LinkInput />
    </div>
  );
};

export default App;
