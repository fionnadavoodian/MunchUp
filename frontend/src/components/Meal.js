import React, { useState } from 'react';
import { mealData } from '../data/data';
import { ArrowSmRightIcon } from '@heroicons/react/outline';

const Meal = () => {
    const [foods, setFoods] = useState(mealData);

    const filterCat = (category) => {
        setFoods(
            mealData.filter((item) => item.category === category)
        );
    };

    return (
        <div className='max-w-[1520px] mx-auto px-4 py-8  bg-gray-100'>
            <h1 className='text-orange-500 font-bold text-3xl text-center py-2'>
                Our Meal
            </h1>
            <div className='flex justify-center mb-8'>
                <button
                    onClick={() => setFoods(mealData)}
                    className='m-1 px-4 py-2 border-2 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white transition duration-300 rounded-lg'
                >
                    All
                </button>
                <button
                    onClick={() => filterCat('pizza')}
                    className='m-1 px-4 py-2 border-2 border-orange-700 text-orange-700 bg-white hover:bg-orange-700 hover:text-white transition duration-300 rounded-lg'
                >
                    Pizza
                </button>
                <button
                    onClick={() => filterCat('chicken')}
                    className='m-1 px-4 py-2 border-2 border-orange-700 text-orange-700 bg-white hover:bg-orange-700 hover:text-white transition duration-300 rounded-lg'
                >
                    Chicken
                </button>
                <button
                    onClick={() => filterCat('salad')}
                    className='m-1 px-4 py-2 border-2 border-orange-700 text-orange-700 bg-white hover:bg-orange-700 hover:text-white transition duration-300 rounded-lg'
                >
                    Salad
                </button>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
                {foods.map((item) => (
                    <div key={item.id} className='border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300'>
                        <img
                            src={item.image}
                            alt={item.name}
                            className='w-full h-[200px] object-cover'
                        />
                        <div className='bg-white p-4'>
                            <div className='flex justify-between items-center'>
                                <p className='font-bold text-lg'>{item.name}</p>
                                <p className='bg-orange-700 text-white rounded-full px-4 py-1 text-sm'>
                                    {item.price}
                                </p>
                            </div>
                            <p className='mt-4 text-gray-600'>
                                {item.description}
                            </p>
                            <div className='mt-4'>
                                <a href='#' className='flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300'>
                                    View More
                                    <ArrowSmRightIcon className='w-5 ml-2' />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Meal;
