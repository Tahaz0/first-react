import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link to='/'>
                    HOME
                </Link>
                <Link to='/about'>
                    About
                </Link>
                <Link to='/comment'>
                    COMMENT
                </Link>
                <Link to='/login'>
                    Log In
                </Link>
            </nav>
        </div>
    );
}
