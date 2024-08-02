import React from 'react'
import { mealData } from '../data/data'

const Meal = () => {
    return (
        <div className='max-w-[1520px] m-auto px-4 py-12 '>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meal</h1>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
                {
                    mealData.map((item) => (
                        <div className='border-none hover:scale-105 duration-300'>
                            <img src={item.image}
                                alt={item.name}
                                className='w-full h-full object-cover rounded-lg ' />
                            <div className='flex justify-between py-2 px-4  -mt-10 text-white '>
                                <p className='bg-orange-700 h-18 w-18 rounded-full py-4 px-2 border-8'>{item.price}
                                </p></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Meal