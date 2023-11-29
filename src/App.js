import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/page2" element={<Page2 />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
