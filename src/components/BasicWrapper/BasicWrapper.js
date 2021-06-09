import React from 'react';
import './BasicWrapper.scss';

/**
 * BasicWraper
 * It's a wrapper used in multiple components with similar apperarence
 * @param {string} title 
 * 
 */
const BasicWrapper = ({children, title}) => {
    return (
        <div className="basic-wrapper">
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default BasicWrapper;