import React, { useState } from 'react'
import './RegisterComponent.css'
import axios from 'axios'

const RegisterComponent = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/api/v1/register`, formData);
            console.log(response.data.message);
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
        }
    }
    return (
        <div className='login container mt-5  ms-auto card p-5' >
            <div className="w-100 w-lg-25">
                <div className="h1 text-center">Sign Up</div>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input className="form-control" id="firstName" aria-describedby="firstNameHelp" name='firstName' value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input className="form-control" id="lastName" aria-describedby="lastNameHelp" name='lastName' value={formData.lastName} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={formData.email} onChange={handleChange} required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default RegisterComponent