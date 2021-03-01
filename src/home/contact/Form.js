import React, { useState } from 'react';
import Button from '../../components/buttons';

import './contact.scss';
import emailjs from 'emailjs-com';
import { Field, Form, Formik, useField}  from 'formik';
import * as Yup from 'yup';
import Reaptcha from "reaptcha";

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div className="formGroup"  
            data-aos="fade-right"
            data-aos-delay={props.aosdelay}
            data-aos-once="true">
            <input {...field} {...props} className="inputField" />
            <label htmlFor={props.id || props.name} className="labelName">{label}</label>
            {meta.touched && meta.error ? (
                <div className="formErrorMessage">
                    <p>{meta.error}</p>
                </div>
        ): null}
        </div>
    );
}

const CustomTextArea = (...props) => {

    return (
        <div className="formGroup"
            data-aos="fade-right"
            data-aos-delay={props.aosdelay}
            data-aos-once="true">
            <Field as="textarea" name="message" placeholder="Your message"></Field>
        </div>
    )
}
function ContactForm () {

    const emailJSuser = "user_hgYjrGldC2mTipMzNEdwy";
    const emailJSservice = "contact_sven";
    const emailJStemplate = "form_sven_template";
    emailjs.init(emailJSuser);

    const googleSiteKey = "6LdlnGcaAAAAANf5Ep-V1NepbRSfBjhwIhNYCvRk";

    const [verified, setVerified] = useState(false);
    const [captcha, setCaptcha] = useState(undefined);

    function onloadCallback () {
        console.log('Captcha loaded')
    }
    // Regex source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html

    const phoneRegex = RegExp(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );

    const validationScheme = Yup.object({
        fullName: Yup.string().min(0, 'Everyone has a name right?').required('You must enter a name'),
        phoneNb: Yup.string().matches(phoneRegex, "Invalid phone number").required("Number cannot be empty"),
        email: Yup.string().required('Email cannot be empty'),
        message: Yup.string().max(500, 'Your message is too long').required('Your message cannot be empty'),
        reCaptcha: Yup.string().required()
    })

    return (
        <div>
        <Formik 
            initialValues={{
                fullName:'', 
                phoneNb: '', 
                email: '', 
                message: '',
                reCaptcha: '' 
            }}
            validateOnMount
            validateOnChange
            validateOnBlur
            validationSchema={validationScheme}
            onSubmit={(values, {setSubmitting, resetForm, submitCount}) => {
                emailjs.send(emailJSservice,emailJStemplate,values)
                .then(function(response) {
                    submitCount += 1;
                    resetForm()
                    setSubmitting(false)
                    captcha.reset()
                }, function(error) {
                    console.log(error)
                })
                
            }}>
               
            {(props) => {
                function verifyCaptcha(res) {
                  
                    setVerified(true)
                    props.setFieldValue("reCaptcha", res)
                }
                return(
                <div className="form_formContainer">
                     
                        <SuccessMessage displayMessage={props.isSubmitting}/>
            
                <Form className="contactForm" onSubmit={props.handleSubmit}>
                    <CustomTextInput 
                        label="enter your name" 
                        name="fullName" 
                        type="text"
                        aosdelay="100"
                       />
                    <CustomTextInput 
                        label="enter your phone number"
                        name="phoneNb"
                        type="tel"
                        aosdelay="200"/>
                    <CustomTextInput 
                        label="enter your email" 
                        name="email" 
                        type="email"
                        aosdelay="300"/>
                    <CustomTextArea 
                        name="message"
                        aosdelay="500"/>
                    <Field name="reCaptcha" type="hidden"/>
                    <div className="form_captchaContainer">
                        <Reaptcha
                            onLoad={onloadCallback}
                            sitekey={googleSiteKey}
                            onVerify={verifyCaptcha}
                            onError={()=> console.log('error')}
                            ref={e => (setCaptcha(e))}
                            />
                    </div>
                    <Button type="submit" text="Submit" disabled={!(props.isValid && verified)}></Button>   
                </Form>
             </div>
            )}}
        </Formik>
        </div>
    
    )


}

export default ContactForm;
/* */

function SuccessMessage(props){
    return ( 
    <div className="form_successMessage">
        {props.displayMessage === true &&
         <p   
         data-aos="zoom-in"
         data-aos-once={true}>Message sent!</p>
        }
       
    </div>
    )
}