import React from "react";

const PaymentError = () => {
    return (
        <div className="modal-container">     
            <div className="modal-left">
                <h1 className="modal-title">Payment Declined!</h1>
                <p className="modal-desc">
                    Looks like there is some problem. <br />
                    Please fill the form again. <br />
                </p>
            </div>

            <div className="modal-right">
                <img src="./yoga-class.jpeg" alt="" />
            </div>
        </div>
    );
};

export default PaymentError;
