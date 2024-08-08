import React from 'react';

const Delivery = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <h3 className='text-orange-500 font-bold text-3xl text-center mb-8'>
                Quick Delivery App
            </h3>
            <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8'>
                <img
                    className='w-full max-w-md mx-auto my-4 rounded-lg shadow-lg'
                    src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'
                    alt='App Showcase'
                />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold text-lg mb-2'>Get The App</p>
                    <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-2 leading-tight'>
                        Limitless Convenience on-demand
                    </h1>
                    <p className='text-gray-700 text-lg mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatum molestiae delectus culpa hic assumenda, voluptate
                        reprehenderit dolore autem cum ullam sed odit perspiciatis.
                        Doloribus quos velit, eveniet ex deserunt fuga? Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos
                        velit, eveniet ex deserunt fuga? Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Voluptatum molestiae delectus culpa
                        hic assumenda, voluptate reprehenderit dolore autem cum ullam sed
                        odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium mt-6 py-3 hover:bg-gray-800 transition duration-300'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
