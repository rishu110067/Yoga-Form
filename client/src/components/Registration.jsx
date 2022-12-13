import React from "react";
import { useFormik } from "formik";
import { userSchema } from "../schemas/userSchema";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  age: "",
  month: "",
  batch: "",
};


const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 22 ~ Registration ~ values",
          values
        );
        action.resetForm();
        
        fetch('/api')
          .then((res) => {
            console.log(res)
          })
      },
    });
  
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 30 ~ Registration ~ errors",
    errors
  );

  return (
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left">
            
            <h1 className="modal-title">Welcome to Namaste Yoga!</h1>
            <h2 className="modal-title">Let's Heal Together...</h2>
            <p className="modal-desc">
              <br />
              Enroll for the Yoga Classes by our Experts
            </p>

            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input
                  type="name"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="form-error">{errors.name}</p>
                ) : null}
              </div>
              
              <div className="input-block">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
              </div>

              <div className="input-block">
                <label htmlFor="phone" className="input-label">
                  Phone
                </label>
                <input
                  type="tel"
                  autoComplete="off"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone ? (
                  <p className="form-error">{errors.phone}</p>
                ) : null}
              </div>

              <div className="input-block">
                <label htmlFor="age" className="input-label">
                  Age
                </label>
                <input
                  type="number"
                  autoComplete="off"
                  name="age"
                  id="age"
                  placeholder="Age"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.age && touched.age ? (
                  <p className="form-error">{errors.age}</p>
                ) : null}
              </div>

              <div className="input-block">
                <label htmlFor="month" className="input-label">
                  Month 
                </label>
                <select 
                  className="select-block" 
                  name="month" 
                  id="month"
                  value={values.month}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  >
                  <option value="">Select Month</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
                {errors.month && touched.month ? (
                  <p className="form-error">{errors.month}</p>
                ) : null}
              </div>

              <div className="input-block">
                <label htmlFor="batch" className="input-label">
                  Batch 
                </label>
                <select 
                  className="select-block" 
                  name="batch" 
                  id="batch"
                  value={values.batch}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  >
                  <option value="">Select Batch</option>
                  <option value="1">6-7AM</option>
                  <option value="2">7-8AM</option>
                  <option value="3">8-9AM</option>
                  <option value="4">5-6PM</option>
                </select>
                {errors.batch && touched.batch ? (
                  <p className="form-error">{errors.batch}</p>
                ) : null}
              </div>

              <div className="modal-buttons">
                <button className="input-button" type="submit">
                  Enroll
                </button>
              </div>
            </form>
          </div>

          <div className="modal-right">
            <img
              src="./yoga-class.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Registration;
