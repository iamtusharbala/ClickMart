import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'


const UserProfile = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        phoneNumber: '',
        shippingAddress: '',
        billingAddress: ''
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
            const response = await axios.patch(`${URL}/api/v1/register`, formData);
            console.log(response.data.message);
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
        }
    }
    return (
        <>
            <Navbar />
            <div className='login container mt-5  ms-auto card p-5' >
                <div className="w-100 w-lg-25">
                    <div className="h1 text-center">Edit User Details</div>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input className="form-control" id="firstName" aria-describedby="firstNameHelp" name='firstName' value={formData.firstName} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input className="form-control" id="lastName" aria-describedby="lastNameHelp" name='lastName' value={formData.lastName} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={formData.email} onChange={handleChange} />                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id="password" value={formData.password} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="shippingAddress" className="form-label">Shipping Address</label>
                            <textarea type="text" className="form-control" name="shippingAddress" id="shippingAddress" value={formData.shippingAddress} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="billingAddress" className="form-label">Billing Address</label>
                            <textarea type="text" className="form-control" name="billingAddress" id="billingAddress" value={formData.billingAddress} onChange={handleChange} />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </>

    )
}

export default UserProfile