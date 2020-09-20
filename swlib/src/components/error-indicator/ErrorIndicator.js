import React,{ Component} from 'react';
import './ErrorIndicator.css';

const ErrorIndicator = () => {
    return (
        <div className="erros-indicator">
            <img src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/death-star-icon-11-256.png" alt="icon" />
            <h2 className="boom">BOOM!</h2>
            <h3>
                something has gone terribly wrong
            </h3>
            <h3>
                (but we already send droids to fix it)
            </h3>
        </div>
    );
};

export default ErrorIndicator;