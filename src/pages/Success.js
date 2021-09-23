import React from 'react'
import check from '../assets/icons/check.svg'
import Heading from '../components/Heading'
import ProgressBar from '../components/ProgressBar'

const Success = () => {
    return (
        <>
        <Heading text="Verification successful!"/>
        <div className="container form-container form-container--main form-container--success" >
            <ProgressBar/>
            <div className="container success-container">
                <img src={check} alt="check icon" className="icon sc__icon"/>
                <p className="sc__text">Verification successful!</p>
            </div>
        </div>
        </>
    )
}

export default Success
