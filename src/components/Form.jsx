import React from 'react'
import { useState
 } from 'react'
export default function Form() {
const [error, setError] = useState("")
const [border, setBorder] = useState("")
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
})

const onSubmit = (e) => {
    e.preventDefault()
    

}

const handleChange = (event) => {
    const {name, value} = event.target

    setFormData(prevForm => ({
        ...prevForm,
        [name]: value
    }))
}

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
                required/>
                <small className='error-message'>{error}</small>
            </div>
            <div className="last-name">
                <label htmlFor='lastName' className='label'>Last Name</label>
                <input
                style={{border: border}}
                id='last_name'
                type="text"
                placeholder='Enter your last name'
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required/>
                {/* <small className='error'>{`${error} last name`}</small> */}
            </div>
        </div>

        <label htmlFor='lastName' className='label'>Email</label>
        <input
        id='email'
        type="email"
        placeholder='yourname@company.com'
        name="email"
        value={formData.email}
        onChange={handleChange}
        required/>
        {/* <small className='error'>{`${error} message`}</small> */}
        

        <label htmlFor='lastName' className='label'>Message</label>
        <textarea
        id='message'
        type="text"
        placeholder="Send me a message and i'll reply you as soon as possible..."
        name="message"
        rows={8}
        value={formData.message}
        onChange={handleChange}
        required/>

        <input 
            type="checkbox" 
            id="agree" 
        />
        <label htmlFor="agree">You agree to providing your data to Wonuola who may contact you</label>


        <button id='btn__submit'>Send Message</button>
    </form>

  )
}
