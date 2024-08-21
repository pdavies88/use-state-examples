'use client';

import { useState } from 'react';

function RegistrationForm() {
  // State to hold form values
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // State to hold form errors
  const [formErrors, setFormErrors] = useState({});

  // State to hold form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Function to validate form values
  const validate = () => {
    let errors = {};
    if (!formValues.username) {
      errors.username = 'Username is required';
    }
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formValues.password) {
      errors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      {isSubmitted ? (
        <div>Form submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
            />
            {formErrors.username && <span>{formErrors.username}</span>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <span>{formErrors.email}</span>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
            {formErrors.password && <span>{formErrors.password}</span>}
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
            />
            {formErrors.confirmPassword && (
              <span>{formErrors.confirmPassword}</span>
            )}
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;
