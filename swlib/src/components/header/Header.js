import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header d-flex">
            <h1>
              <Link to="/"   
              className="main-title">
                  Star Wars Library
              </Link>
            </h1>
            <ul className="d-flex">
                <Link  className="items" to="/people/">Persons</Link>
                <Link className="items" to="/planets">Planets</Link>
                <Link className="items" to="/starships/">Starships</Link>
                <Link className="items" to="/login">Login</Link>
                <Link className="items" to="/secret-page">Secret page</Link>
            </ul>
        </div>

    )
}

export default Header;