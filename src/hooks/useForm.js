import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

const useForm = ( defaultValues, handleErrors, newRoute ) => {
    const [values,setValues] = useState(defaultValues)
    const [errors,setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }
    const history = useHistory();
    
    const handleSubmit = e => {
        e.preventDefault( );
        setErrors( handleErrors( values ) );
        setIsSubmitting( true );
        
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting)
        history.push(newRoute);
    },[errors,history,isSubmitting,newRoute])

    return {values,errors,handleChange,handleSubmit}
}

export default useForm