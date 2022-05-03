import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopPage from "./TopPage";
import "./style/css/App.css";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
