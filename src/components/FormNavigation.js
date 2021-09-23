import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const FormNavigation = ( {text,icon,linkRoute}) => {
    return (
        <>
        <div className="container form-navigation">
          <div className="row text-btn-row">
            <div className="col-1">
            <Link to={linkRoute}>
              <button className="btn f-nav__btn">
                <img src={arrow} alt="form back icon" className="btn__icon" />
              </button>
            </Link>
            </div>
            <div className="col-11">
                <p className="f-nav__text">
                  { text }
                </p>
              </div>
          </div>
          
          <div className="row">
              <img className="icon f-nav__icon" src={icon} alt="form navigation icon"/>
          </div>
        </div>
        </>
    )
}

export default FormNavigation
