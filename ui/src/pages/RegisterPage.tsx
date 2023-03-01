import React, { ChangeEvent, useCallback, useState } from 'react';
import './Register.css';
const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const { name, value } = e.target;
      if (name === 'name') setUsername(value);
      else if (name === 'password') setPassword(value);
    },
    [setUsername, setPassword]
  );

  const handleRegister = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
        //credentials: 'include', //this adds the cookie
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="register" onSubmit={handleRegister}>
      <h1 className="title">Register</h1>
      <input type="text" name="name" value={username} onChange={handleChange} />
      <input type="password" name="password" value={password} onChange={handleChange} />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
