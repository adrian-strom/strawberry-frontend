import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotels from "./Pages/Hotels";
import Layout from "./Components/Layout";
import Hotel from "./Pages/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
