import React,{ Component} from 'react';
import './ErrorIndicator.css';

const ErrorIndicator = () => {
    return (
        <div className="erros-indicator">
            <span className="boom">BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already send droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;