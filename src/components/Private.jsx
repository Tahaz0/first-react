import React from 'react';
import { Navigate } from 'react-router-dom';
export default function Private({ children }) {

    const user = localStorage.getItem('user');
    const auth = user;
    return (
        auth ? children : <Navigate to='/login' replace />

    );
}
