import "./assets/sass/style.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import pages from "./pages";

const { Home, About, Career, Contact, Service } = pages;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
