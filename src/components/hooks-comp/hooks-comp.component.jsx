import React, { useState } from 'react';
import './hooks-comp.styles.scss';
import CardHooks from "./card-hooks/card-hooks.component";

const HooksComp = () => {
    const [name, setName] = useState('origin name');
    const [address, setAddress] = useState('origin address');

    const handleClick = (e) => {
        e.preventDefault();
        console.log('button clicked');
        setName('destination name set');
        setAddress('destination address set');
    }
    return (
        <div className="div-container">
            <h1>testing HOOKS : </h1>
            <h1>name = </h1>
            {name}
            <h1> address = </h1>
            {address}
            <CardHooks>
                <h1>my Card</h1>
                <div className="div-button">
                    <button className="button1"
                        onClick={(e) => handleClick(e)}
                    >
                        Click me !
                    </button>
                </div>
            </CardHooks>
        </div>
    );
}

export default HooksComp;
