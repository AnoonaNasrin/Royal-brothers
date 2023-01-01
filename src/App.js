import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
