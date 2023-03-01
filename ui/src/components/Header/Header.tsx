import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../store';
//import { UserContext } from '../../store';
import './Header.css';

const Header = () => {
  const {userInfo, setUserInfo} = useContext(UserContext);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/profile', {
          credentials: 'include', //this is for the cookie in the request body
          signal: controller.signal
        });
        const responseData = await response?.json();
        setUserInfo(responseData);
        
        //localStorage.setItem("username", responseData?.username);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => controller.abort(); // cancel the request before component unmounts
  }, []);


  const logoutHandler = async () => {
    const response = await fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    });
    console.log(response);
    setUserInfo(null);

    // if(response.ok){
    //   setRedirect(true);
    // }
    // setUserInfo(null);
    //localStorage.removeItem("username");
  };

  const username = userInfo?.username;

  return (
    <header className="header-container">
      <Link to="/" className="logo">
        Tacko Tuesday
      </Link>
      <nav className="header-links">
        {username ? (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logoutHandler}>Logout</a>{' '}
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
