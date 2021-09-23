import React, {useState} from 'react'
import phone from '../assets/icons/phone.svg'
import email from '../assets/icons/email.svg'
import useForm from '../hooks/useForm'
import FormInput from '../components/FormInput'
import FormNavigation from '../components/FormNavigation'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import Heading from '../components/Heading'

const Validation = (  ) => {
    // Toggle validation method
    // phoneValidation = true [ phone form ]
    // phoneValidation = false [ email form ]
    const [phoneValidation, setValidationMethod] = useState(true);
    function toggleValidationMethod ( e ) {
      e.preventDefault( )
      setValidationMethod(!phoneValidation)
    }

    // Form validation
    const {values,errors,handleChange,handleSubmit} = useForm(
      { code:'' }, // form values
      // Error handler function
      ( values ) => {
        let errors = {};
        if ( values.code.length !== 6 ) errors.code = "Please enter a valid code"
        if ( values.code.length === 0 ) errors.code = "Please enter a code"
        return errors;
      },
      "/success" // next step
    )

    return (
      <>
        <Heading text={
          `Verify your ${phoneValidation ? 'mobile number' : 'email address'}`
        }/>
        <form className="container form-container form-container--main" >
          <ProgressBar/>

          <FormNavigation
            text={
              <>
                A 6-digit code has been sent {
                  phoneValidation ?
                    <>as a text message to <b>+1 9000-00-1234</b></> :
                    <>to <b>youremail@emaildomain.com</b></>
                }
              </>
            }
            icon={phoneValidation ? phone : email}
            linkRoute="/form" />
          
          <FormInput
            labelText="Email address"
            type="text"
            value={values.code}
            name="code"
            onChange={handleChange}
            errorMessage={errors.code}
            placeholder="Enter 6-digit verification code here"
          />

          <div className="container input-container">
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
              <span className="fb__span">
                Didn't receive code? <a href="/#">Recend code</a>
              </span>
              <span className="fb__span">OR</span>
              <Button
                className="toggle-validation"
                onClick={toggleValidationMethod}
                text={ `Send verification code on  ${ phoneValidation ? " mobile no" : " email" }` }
              />
            </p>
          </div>

        </form>
      </>
    )
}

export default Validation
