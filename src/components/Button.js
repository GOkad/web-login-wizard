import React from 'react'

const Button = ( {className,text,type,onClick} ) => {
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
        >
            {text}
        </button>
    )
}

export default Button
