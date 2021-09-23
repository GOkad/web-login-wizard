import React from 'react'

const FormInput = ( { labelText, errorMessage, type,name, value, onChange, placeholder } ) => {
    return (
        <div className="container form-group input-container">
            <label htmlFor={name} className="row input-c__label">{ labelText }</label>
            <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className={`form-control input-c__input ${errorMessage ? 'input-c__input--error' : ''} `}
            />
            {
                errorMessage &&
                <span className="row input-c__error" role="alert">
                    {errorMessage}
                </span>
            }
            
        </div>
    )
}

export default FormInput
