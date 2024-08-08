import React from 'react';
import { topPicks } from '../data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

const TopPicks = () => {
    return (
        <div className='py-8'>
            <h1 className='text-orange-500 font-bold text-3xl text-center mb-6'>Top Picks</h1>
            <div className='relative max-w-[1520px] mx-auto px-4'>
                <Splide
                    options={{
                        perPage: 4,
                        gap: '1rem',
                        drag: 'free',
                        arrows: false,
                        breakpoints: {
                            1024: { perPage: 3 },
                            768: { perPage: 2 },
                            480: { perPage: 1 },
                        },
                    }}
                >
                    {topPicks.map((item) => (
                        <SplideSlide key={item.id}>
                            <div className='relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105'>
                                <img
                                    className='w-full h-64 object-cover rounded-xl'
                                    src={item.img}
                                    alt={item.title}
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4 text-white'>
                                    <p className='text-lg font-semibold'>{item.title}</p>
                                    <p className='text-sm'>{item.price}</p>
                                    <button className='mt-4 bg-orange-600 text-white py-2 px-4 rounded-full border border-orange-600 hover:bg-orange-700 transition duration-300'>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

export default TopPicks;
