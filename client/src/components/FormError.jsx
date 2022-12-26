import React from "react";

const FormError = () => {
    return (
        <div className="modal-container">     
            <div className="modal-left">
                <h1 className="modal-title">Already Enrolled!</h1>
                <p className="modal-desc">
                    You are already enrolled in this month and batch with this email. <br />
                </p>
            </div>

            <div className="modal-right">
                <img src="./yoga-class.jpeg" alt="" />
            </div>
        </div>
    );
};

export default FormError;
