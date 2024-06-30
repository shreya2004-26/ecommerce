import React from 'react'
import FeatureProduct from './FeatureProduct'

const Products = () => {
    return (
        <>
            <div className='flex flex-col gap-5'>
                <FeatureProduct title="Mens Product" />
                <FeatureProduct title="Womens Product" />
                <FeatureProduct title="Kids Product" />
            </div>
        </>
    )
}

export default Products
