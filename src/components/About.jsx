import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function About() {
    const navigate = useNavigate();

    let goBack = () => {
        navigate('/');
    };
    return (
        <div><button onClick={goBack}>GO BACK</button></div>
    );
}
