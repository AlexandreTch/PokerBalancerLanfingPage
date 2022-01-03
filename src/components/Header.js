import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <div>
            <div className='firstDiv'>
                <h2 ><Link className='header' to="/">Home</Link></h2>
                <h2><Link className='header' to="/profile">Statistic</Link></h2>
                <h2><Link className='header' to="/notification">Strategies</Link></h2>
            </div>
        </div>
    )
};

export default Header;