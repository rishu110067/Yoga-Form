import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./index.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Enrolled from "./components/Enrolled"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='enrolled' element={<Enrolled />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;