import React from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../assets/icons/user.svg'
import newUserIcon from '../assets/icons/user-new.svg'
import Button from '../components/Button'
import Heading from '../components/Heading'


const Landing = () => {
    return (
        <>
        <Heading text="Welcome to website"/>
        <div className="container form-container" >
            <div className="row lp-row">
                <div className="col-3">
                    <img src={newUserIcon} alt="user icon" className="lp-row__icon" />
                </div>
                <div className="col-9">
                    <h3 className="lp-row__name">I'm a new user</h3>
                    <Link to="/form">
                        <Button
                            className="btn lp-row__btn"
                            text="Create Account"
                        />
                    </Link>
                </div>
            </div>

            <div className="row lp-row">
                <div className="col-3">
                    <img src={userIcon} alt="user icon" className="lp-row__icon" />
                </div>
                <div className="col-9">
                    <h3 className="lp-row__name">I have an account</h3>
                    <Link to="/form">
                        <Button
                            className="btn lp-row__btn"
                            text="Login now"
                        />
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Landing
