import React from 'react'
import { useLocation } from 'react-router-dom'

const Heading = ( { text } ) => {
    const location = useLocation( );
    return (
        <h1 id="website-heading">
            { text }
            {
                location.pathname === "/" && <p className="landing-page-text">Keeping Communities Connected</p>
            }
        </h1>
    )
}

export default Heading
