import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ outlet, navigate }) => {
    return true ? <Outlet to={outlet} /> : <Navigate to={navigate} />
}

export default ProtectedRoute;
