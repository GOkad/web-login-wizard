import React from 'react'
import useForm from '../hooks/useForm'
import FormInput from '../components/FormInput'
import FormNavigation from '../components/FormNavigation'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import phone from '../assets/icons/phone.svg'
import Heading from '../components/Heading'


const Form = () => { 
    
    const {values,errors,handleChange,handleSubmit} = useForm(
      { mobile:'', email:'' }, // form values
      // Error handler function
      ( values ) => { 
        let errors = {};
        if ( values.mobile.length === 0 ) errors.mobile = "Please enter your mobile no."
        if ( values.email.length === 0 ) errors.email = "Please enter your email."
        return errors;
      }, 
      "/validate" // next step
    )
    
    return (
      <>
      <Heading text="Welcome to website"/>
      <form className="container form-container form-container--main" >
        <ProgressBar/>
        <FormNavigation
          text="Enter your mobile no. & email id"
          icon={phone}
          linkRoute="/" />

        <FormInput
          labelText="Mobile no."
          type="text"
          value={values.mobile}
          name="mobile"
          onChange={handleChange}
          errorMessage={errors.mobile}
          placeholder="Enter your mobile no."
        />

        <FormInput
          labelText="Email address"
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
          errorMessage={errors.email}
          placeholder="Enter your email id"
        />
        
        <div className="container form-group input-container">
          <div className="row">
            <Button
              className="btn input-c__btn"
              type="submit"
              onClick={handleSubmit}
              text="Continue"
            />
          </div>
        </div>

        <div className="container ">
          <p className="input-c__text">
            By signing up, I agree to the <a href="/#">Privacy Policy</a> & <a href="/#">Terms of Use</a>
          </p>
        </div>

      </form>
      </>
    )
}

export default Form
