import React from "react";
import { useState } from 'react';
import axios from "axios";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

const Payment = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

    const [number, setNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiry, setExpiry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!number || !cvv || !expiry) return;
        try {
            const card = {number: number, cvv: cvv, expiry: expiry};
            const paymentURL = "http://localhost:3001/payment";
            const resp = await axios.get(paymentURL, {params: {card: card}});
            if(resp.data) {
                const saveURL = "http://localhost:3001/save";
                await axios.post(saveURL, state);
                navigate('/payment-done'); 
            } else {
                navigate('/payment-error');
            }
        }
        catch (error) {
            console.log(error.response);
            navigate('/payment-error');
        }
    };

    if(!state) {
        return (
            <Navigate to='/payment-error' />
        )
    }

    return (
        <div className="modal-container">     
            <div className="modal-left">
                <h1 className="modal-title">Complete Payment!</h1>
                <p className="modal-desc">
                    Name: {state.name} <br />
                    Email: {state.email} <br />
                    Phone: {state.phone} <br />
                    Age: {state.age} <br />
                    Month: {state.month} <br />
                    Batch: {state.batch} <br />
                </p>
                
                <form onSubmit={handleSubmit}>
                    <div className="input-block">
                        <label htmlFor="card-number" className="input-label">
                            Card Number
                        </label>
                        <input
                            type="number"
                            autoComplete="off"
                            name="card-number"
                            id="card-number"
                            placeholder="Card Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="cvv" className="input-label">
                            CVV
                        </label>
                        <input
                            type="number"
                            autoComplete="off"
                            name="cvv"
                            id="cvv"
                            placeholder="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="expiry" className="input-label">
                            Expiry Date (MM/YY)
                        </label>
                        <input
                            type="string"
                            autoComplete="off"
                            name="expiry"
                            id="expiry"
                            placeholder="mm/yy"
                            pattern="[0-9][0-9]/[0-9][0-9]"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                        />
                    </div>

                    <div className="modal-buttons">
                        <button className="input-button" type="submit">
                            Pay Rs. 500
                        </button>
                    </div>
                </form>
            </div>

            <div className="modal-right">
                <img src="./yoga-class.jpeg" alt="" />
            </div>
        </div>
    );
};

export default Payment;
