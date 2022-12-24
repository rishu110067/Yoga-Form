import React from "react";
import {useState, useEffect} from 'react';
import axios from "axios";

const Enrolled = () => {
    const [forms, setForms] = useState([]);

    const getForms = async () => {
        try {
            const url = "http://localhost:3001/get";
            const resp = await axios.get(url);
            setForms(resp.data);
        }
        catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        getForms()
    }, []);
    
    return (
        <section className='data'>
            {
                forms.map((form) => {
                    return (
                    <div className="data-container">
                        Name: {form.name} <br />
                        Email: {form.email} <br />
                        Phone: {form.phone} <br />
                        Age: {form.age} <br />
                        Month: {form.month} <br />
                        Batch: {form.batch} <br />
                    </div>
                    );
                })
            }
        </section>
    );
};

export default Enrolled;
