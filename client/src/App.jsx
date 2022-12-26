import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./index.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Enrolled from "./components/Enrolled"
import Payment from "./components/Payment"
import PaymentDone from "./components/PaymentDone"
import PaymentError from "./components/PaymentError"
import FormError from "./components/FormError"
import UnknownError from "./components/UnknownError"
import NotFoundError from "./components/NotFoundError"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='enrolled' element={<Enrolled />} />
        <Route path='payment' element={<Payment />} />
        <Route path='payment-done' element={<PaymentDone />} />
        <Route path='payment-error' element={<PaymentError />} />
        <Route path='form-error' element={<FormError />} />
        <Route path='unknown-error' element={<UnknownError />} />
        <Route path='*' element={<NotFoundError />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;