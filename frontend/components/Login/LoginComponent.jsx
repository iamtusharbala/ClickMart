import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginComponent.css'
import axios from 'axios'


const LoginComponent = () => {

    const redirect = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/api/v1/login`, formData);
            console.log(URL);
            console.log(response.data.message);
            setIsLoggedIn(true)
            isLoggedIn ? redirect('/') : null
            console.log("logged", isLoggedIn); //Here
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
        }
    }
    return (
        <div className='login container mx-auto mt-5 w-25 my-auto ' >
            <div className="h1 text-center">Login</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={formData.email} onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginComponent