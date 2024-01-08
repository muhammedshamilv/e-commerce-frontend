import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LocalStorageService from './LocalStorageService';

function PublicOutlet() {
  const isAuthenticated = () => {
    return LocalStorageService.getAccessToken();
  };
  return isAuthenticated() ? <Navigate to='/home' /> : <Outlet />;
}

export default PublicOutlet;
