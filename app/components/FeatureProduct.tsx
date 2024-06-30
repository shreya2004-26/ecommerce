import React from 'react'
import ProductCard from './ProductCard'

const FeatureProduct = ({ title }: any) => {
    return (
        <>
            <div className='bg-background rounded-md shadow-sm p-5 flex flex-col gap-5'>
                {/* Heading */}
                <h1 className='text-xl font-bold'>{title}</h1>
                {/* Card */}
                <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default FeatureProduct

name: String;