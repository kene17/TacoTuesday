import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/profile", {
          credentials: "include", //this is for the cookie in the request body
          signal: controller.signal,
        });
        const responseData = await response?.json();
        setUsername(responseData);
        //localStorage.setItem("username", responseData?.username);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => controller.abort(); // cancel the request before component unmounts
  }, []);

  const logoutHandler = async () => {
    const response = await fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    console.log(response);
    setUsername(null);
    
    // if(response.ok){
    //   setRedirect(true);
    // }
    // setUserInfo(null);
    //localStorage.removeItem("username");
  };

  return (
    <header className="header-container">
      <Link to="/" className="logo">
        Tacko Tuesday
      </Link>
      <nav className="header-links">
        {
          username ? (
            <>
            <Link to="/create">Create new post</Link>
            <a onClick={logoutHandler}>Logout</a> </>
          ) :
            <>

              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link></>}
      </nav>
    </header>
  );
};

export default Header;
