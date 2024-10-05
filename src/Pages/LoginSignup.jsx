import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  // State to switch between Login and Sign Up forms
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  // Validation patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{11}$/;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = () => {
    let errors = {};
    if (!isLogin) {
      // Sign Up specific validation
      if (!formData.username) {
        errors.username = 'Username is required';
      } else if (formData.username.length < 3) {
        errors.username = 'Username must be at least 3 characters long';
      } else if (formData.username.length > 15) {
        errors.username = 'Username must be less than 15 characters';
      }
      if (!formData.phone) {
        errors.phone = 'Phone number is required';
      } else if (!phonePattern.test(formData.phone)) {
        errors.phone = 'Phone number must be 11 digits';
      }
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        alert('Login Successful!');
        setLoginError('');
        // Clear form fields
        setFormData({ username: '', email: '', phone: '', password: '' });
      } else {
        setLoginError('Invalid email or password. Please try again.');
      }
    } else {
      // Sign Up logic
      if (validateForm()) {
        // Save user to local storage
        localStorage.setItem('user', JSON.stringify({
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }));

        alert('Registration Successful!');
        // Clear form fields
        setFormData({ username: '', email: '', phone: '', password: '' });
        setFormErrors({});
      }
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {/* Conditionally Render Username and Phone for Sign Up */}
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="username"
                  placeholder='Your Name'
                  value={formData.username}
                  onChange={handleChange}
                  className={formErrors.username ? 'error-input' : ''}
                />
                {formErrors.username && <p className="error-text">{formErrors.username}</p>}

                <input
                  type="text"
                  name="phone"
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                  className={formErrors.phone ? 'error-input' : ''}
                />
                {formErrors.phone && <p className="error-text">{formErrors.phone}</p>}
              </>
            )}

            {/* Email and Password Fields for Both Login and Sign Up */}
            <input
              type="email"
              name="email"
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? 'error-input' : ''}
            />
            {formErrors.email && <p className="error-text">{formErrors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className={formErrors.password ? 'error-input' : ''}
            />
            {formErrors.password && <p className="error-text">{formErrors.password}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit">{isLogin ? 'Login' : 'Continue'}</button>

          {/* Login Error Message */}
          {loginError && <p className="error-text">{loginError}</p>}

          {/* Toggle Links */}
          <p className="loginsignup-login">
            {isLogin ? (
              <>Don't have an account? <span onClick={() => setIsLogin(false)}>Sign up here</span></>
            ) : (
              <>Already have an account? <span onClick={() => setIsLogin(true)}>Login here</span></>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
