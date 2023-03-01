import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../store';
import './Register.css';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {userInfo, setUserInfo} = useContext(UserContext);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const { name, value } = e.target;
      if (name === 'name') setUsername(value);
      else if (name === 'password') setPassword(value);
    },
    [setUsername, setPassword]
  );

  const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include' //this saves the cookie in react app
      });
      if (response.ok) {
        const responseData = await response?.json();
        setRedirect(true);
        setUserInfo(responseData)

      } else {
        console.log('login failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form className="register" onSubmit={handleLogin}>
      <h1 className="title">Login</h1>
      <input type="text" name="name" value={username} onChange={handleChange} />
      <input type="password" name="password" value={password} onChange={handleChange} />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
