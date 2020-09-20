import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h1 >Star Wars Library</h1>
            <ul className="d-flex">
                <li><a href="#">Persons</a></li>
                <li><a href="#">Planets</a></li>
                <li><a href="#">Starships</a></li>
            </ul>
        </div>

    )
}

export default Header;