import React from "react";

const PaymentDone = () => {
    return (
        <div className="modal-container">     
            <div className="modal-left">
                <h1 className="modal-title">Payment Done!</h1>
                <p className="modal-desc">
                    Congratulations! <br />
                    You are enrolled for the class.
                </p>
            </div>

            <div className="modal-right">
                <img src="./yoga-class.jpeg" alt="" />
            </div>
        </div>
    );
};

export default PaymentDone;
