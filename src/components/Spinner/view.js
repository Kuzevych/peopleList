import React from 'react';
import './style.scss';
//import './spinner.css';

export const SpinnerView = () => {
    return (
        <div className="lds-css">
            <div className="lds-double-ring">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};


