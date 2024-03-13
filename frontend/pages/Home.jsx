import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import Category from '../components/Category/Category'
import axios from 'axios'

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <div className="section container">
                <h4 className='m-0'>Explore Popular Categories</h4>
                <div className="d-flex justify-content-between">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
            </div>
        </>

    )
}

export default Home