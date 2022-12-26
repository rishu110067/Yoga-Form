import React from "react";

const NotFoundError = () => {
    return (
        <div className="error">    
            <div className="col">
                <h1 className="modal-title">404!</h1>
                <p className="modal-desc">
                    <br />
                    The page you are looking for doesn't exists!
                </p>
            </div> 
        </div>
    );
};

export default NotFoundError;
