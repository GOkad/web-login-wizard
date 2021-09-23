import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    
    return (
        <header className="navbar">
            <Link to="/">
                <h2 className="navbar-brand">
                    Website
                </h2>
            </Link>

            <button className="btn navbar-btn">Need help?</button>
        </header>
    )
}

export default Header
