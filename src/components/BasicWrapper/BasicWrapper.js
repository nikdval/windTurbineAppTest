import React from 'react';
import './BasicWrapper.scss';

const BasicWrapper = ({children, title}) => {
    return (
        <div className="basic-wrapper">
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default BasicWrapper;