import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...restOfProps }) => {

    return (
        <div className="group">
            {label ? 
                (<label className={`${ restOfProps.value.length ? "shrink" : "" } form-input-label`}>
                    {label} :
                </label>)
                : null
            }
            <input type="text" className="form-input"
                onChange={handleChange}
                {...restOfProps}
            />
        </div>
    );
}

export default FormInput;
