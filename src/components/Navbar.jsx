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
                    ABOUT
                </Link>
                <Link to='/watched'>
                    WATCHED LIST
                </Link>
            </nav>
        </div>
    );
}
