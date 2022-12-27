import React from "react";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Enrolled = () => {
    const [forms, setForms] = useState([]);
    const navigate = useNavigate();

    const getForms = async () => {
        try {
            const getURL = process.env.REACT_APP_GET_URL;
            const resp = await axios.get(getURL);
            setForms(resp.data);
        }
        catch (error) {
            console.log(error.response);
            navigate('/unknown-error');
        }
    }

    useEffect(() => {
        getForms()
    }, []);
    
    return (
        <section className='grid'>
        {
            forms.map((form) => {
                return (
                    <div className="col">
                        <p>
                            <b className="bold">Name:</b> <span class="tab" /> {form.name} <br />
                            <b className="bold">Email:</b> <span class="tab" /> {form.email} <br />
                            <b className="bold">Phone:</b> <span class="tab" /> {form.phone} <br />
                            <b className="bold">Age:</b> <span class="tab" /> {form.age} <br />
                            <b className="bold">Month:</b> <span class="tab" /> {form.month} <br />
                            <b className="bold">Batch:</b> <span class="tab" /> {form.batch} <br />
                        </p>
                    </div>
                );
            })
        }
        </section>
    );
};

export default Enrolled;
