import React from 'react';
import './card-hooks.styles.scss';

const CardHooks = (props1) => {
    console.log('CardHooks props = ', props1);
    return (
        <div className="div-container-button">
            {props1.children}
        </div>
    );
}

export default CardHooks;
