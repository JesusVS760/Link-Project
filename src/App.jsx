import "./App.css";

import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LinkInput from "./components/LinkInput";
import Statistics from "./components/Statistics";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <LinkInput />
      <Statistics />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
