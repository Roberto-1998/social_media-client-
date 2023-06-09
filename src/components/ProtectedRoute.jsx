import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuth = Boolean(useSelector((state) => state.token));

  return isAuth ? children : <Navigate to={'/'} />;
};

export default ProtectedRoute;
