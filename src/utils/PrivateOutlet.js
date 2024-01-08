import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LocalStorageService from './LocalStorageService';

function PrivateOutlet() {
  const isAuthenticated = () => {
    return LocalStorageService.getAccessToken();
  };
  return isAuthenticated() ? <Outlet /> : <Navigate to='/' />;
}
export default PrivateOutlet;
