import React from 'react';

const NewsLetter = () => {
    return (
        <div className='max-w-[1520px] mx-auto px-6 py-16 bg-[#24262b] text-white'>
            <div className='bg-[#1c1e22] p-8 rounded-lg shadow-lg'>
                <div className='grid lg:grid-cols-3 gap-8 items-center'>
                    <div className='lg:col-span-2'>
                        <h1 className='text-4xl font-bold leading-tight mb-4'>
                            Need advice on how to improve your flow?
                        </h1>
                        <p className='text-lg mb-6'>
                            Sign up to join our newsletter and stay up to date with the latest tips and trends.
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                            <input
                                className='p-4 rounded-lg text-black w-full sm:flex-grow mb-4 sm:mb-0 sm:mr-4'
                                type='email'
                                placeholder='Enter your email'
                            />
                            <button className='bg-[#00df9a] text-white rounded-lg font-medium w-full sm:w-auto px-8 py-1 hover:bg-[#00c988] transition-colors duration-200'>
                                Notify Me
                            </button>
                        </div>
                        <p className='mt-4 text-sm'>
                            We are concerned about the security of your data. Read our{' '}
                            <a href="/privacy-policy" className='text-[#00df9a] hover:underline'>
                                Privacy Policy
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
            <hr className='my-8 bg-gray-700 border-none h-px' />
        </div>
    );
};

export default NewsLetter;
