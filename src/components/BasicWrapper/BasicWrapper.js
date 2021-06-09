import React from 'react';
import './BasicWrapper.scss';

const BasicWrapper = ({children}) => {
    return (
        <div className="basic-wrapper">
            {children}
        </div>
    )
}

export default BasicWrapper;