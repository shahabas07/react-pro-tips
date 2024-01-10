import React, { useState } from 'react';
import '../App.css'

const Forms = () => {
  const [formVals, setFormVals] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNo: '',
  });

  const [errors, setErrors] = useState({});
  const [sub, setSub] = useState(false);

  function handleForm(e) {
    const { name, value } = e.target;
    setFormVals({ ...formVals, [name]: value });
  }

  function validate(e) {
    e.preventDefault();
    let error = {};

    if (formVals.firstName.trim() === '') {
      error.firstName = 'Please enter your first name';
    }

    if (formVals.lastName.trim() === '') {
      error.lastName = 'Please provide your last name';
    }

    if (formVals.phoneNo.trim() === '') {
      error.phoneNo = 'Please add a valid phone number.';
    }

    if (formVals.email.trim() === '') {
      error.email = 'Please provide your email';
    }

    setErrors(error);
    setSub(true);
  }

  return (
    <>
      <form  onSubmit={validate}>
        {sub && Object.keys(errors).length === 0 && (
          <p>Registration Successful!</p>
        )}
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formVals.firstName}
          onChange={handleForm}
        />
        <span className="error">{errors.firstName}</span>

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formVals.lastName}
          onChange={handleForm}
        />
        <span className="error">{errors.lastName}</span>

        <input
          type="tel"
          placeholder="Phone Number"
          name="phoneNo"
          value={formVals.phoneNo}
          onChange={handleForm}
        />
        <span className="error">{errors.phoneNo}</span>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formVals.email}
          onChange={handleForm}
        />
        <span className="error">{errors.email}</span>

        <button type="submit" >
          Register
        </button>
      </form>
    </>
  );
};

export default Forms;
