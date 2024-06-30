import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

const Banner = () => {
    const banners = ["https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/78e89d02375d5222.jpg?q=20", "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/48d216e35dbd226f.jpg?q=20", "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f21c8c88a0bb63e0.png?q=20"]
    return (
        <div className='bg-background rounded-md'>
            <Carousel className="w-full">
                <CarouselContent>
                    {banners.map((curr, index) => (
                        <CarouselItem key={index}>
                            <div>
                                <img src={curr} alt="banner" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='left-0' />
                <CarouselNext className='right-0' />
            </Carousel>
        </div>
    )
}

export default Banner