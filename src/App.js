import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pageTwo" element={<PageTwo />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
