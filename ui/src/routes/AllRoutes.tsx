import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, RegisterPage } from '../pages';
import LoginPage from '../pages/LoginPage';
import Layout from './Layout';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
