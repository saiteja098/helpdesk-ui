import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [signUp, setSignUp] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Add form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', checked);
  };

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <h3 className="header">
        {signUp ? 'Create Account' : 'Login to Your Account'}
      </h3>
      {signUp && (
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
          <input
            type="checkbox"
            id="remember"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="remember">Remember me</label>
      </div>
      <Button variant="contained" type="submit" fullWidth={true}>
        {signUp ? 'Sign Up' : 'Login'}
      </Button>
      <p className='loginFooter'>
        {signUp ? 'Already have an account?' : 'New to helpdesk?'}
        <span className='toggleSignUp' onClick={handleSignUp}>{signUp ? ' Login' : ' Sign Up'}</span>
      </p>
    </form>
  );
};

export default Login;
