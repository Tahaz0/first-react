import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();
    const handelUser = () => {
        localStorage.setItem('user', true);
        navigate("/comment");
    };

    return (
        <div >
            <h1>Please login to get assess of Comment section</h1>
            <button style={{ color: 'white', backgroundColor: 'blue', padding: '12px 22px' }}
                onClick={handelUser}
            >
                Login
            </button>
        </div>
    );
}
