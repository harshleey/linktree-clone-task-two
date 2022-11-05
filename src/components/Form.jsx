import React from 'react'
import { useState, useEffect } from 'react'


const Form = () =>  {
  const values = { 
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    isAgreed: true
   };
  const [formData, setFormData] = useState(values);
  const [firstNameError, setFirstNameError] = useState()
  const [lastNameError, setLastNameError] = useState()
  const [emailError, setEmailError] = useState()
  const [messageError, setMessageError] = useState()



const handleChange = (event) => {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
    }))
}

const onSubmit = (e) => {
  e.preventDefault();

  formData.firstName.length === 0 ? setFirstNameError(true) : setFirstNameError(false)

  formData.lastName.length === 0 ? setLastNameError(true) : setLastNameError(false)

  formData.email.length === 0 ? setEmailError(true) : setEmailError(false)

  formData.message.length === 0 ?setMessageError(true) : setMessageError(false)
    
  

  if (firstNameError === false && lastNameError === false && emailError === false && messageError === false) {
    alert("Message sent successfully")

    setFormData(prevFormData => ({
      ...prevFormData,
      firstName: "",
      lastName: "",
      email: "",
      message: ""

  }))
  }

  
}

console.log(formData.isAgreed)

  return (
        <form onSubmit={onSubmit}> 
            <div className="names">
                <div className="first-name">
                    <label htmlFor='firstName' className='label'>First Name</label>
                    <input
                    id='first_name'
                    type="text"
                    placeholder='Enter your first name'
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={firstNameError === true ? {border: "1px solid red"} : {}}
                    />
                    <p className='error'>{firstNameError === true? "Please enter first name" : " "}</p>
                </div>
                
                
                <div className="last-name">
                    <label htmlFor='lastName' className='label'>Last Name</label>
                    <input
                    id='last_name'
                    type="text"
                    placeholder='Enter your last name'
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={lastNameError === true ? {border: "1px solid red"} : {}}
                    />
                    <p className='error'>{lastNameError ? "Please enter a last name" : ""}</p>
                    
                    
                </div>
            </div>

            <label htmlFor='email' className='label'>Email</label>
            <input
            id='email'
            type="email"
            placeholder='yourname@company.com'
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={emailError ? {border: "1px solid #F83F23"} : {}}
            />
            <p className='error'>{emailError === true? "Please enter an email address" : ""}</p>

            <label htmlFor='message' className='label'>Message</label>
            <textarea
            id='message'
            type="text"
            placeholder="Send me a message and i'll reply you as soon as possible..."
            name="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            style={messageError? {border: "1px solid #F83F23"} : {}}
            />
            <p className='error'>{messageError ? "Please enter a message" : ""}</p>

            <input 
            type="checkbox" 
            id="agree"
            checked={formData.isAgreed} 
            />
            <label htmlFor="agree">You agree to providing your data to Fatima Adekunle-logun who may contact you</label>


            <button id='btn__submit'>Send Message</button>
        </form>
  )
}

export default Form
