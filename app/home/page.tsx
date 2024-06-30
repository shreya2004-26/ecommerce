import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Banner from '../components/Banner'
import Products from '../components/Products'
const page = () => {
    return (
        <>
            <div className='w-full min-h-screen bg-gray-100 flex flex-col gap-3 pb-8'>
                <Navbar />
                <div className='mx-5 flex flex-col gap-3'>
                    <Category />
                    <Banner />
                    <Products />
                </div>
            </div>
        </>
    )
}

export default page