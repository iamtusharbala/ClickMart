import React from 'react'
import img from '../../src/assets/category.jpeg'
import './Category.css'

const Category = () => {
    return (
        <div className='category mt-5 text-center'>
            <img src={img} alt="" />
            <p className="fw-medium">Italic text</p>
        </div>
    )
}

export default Category