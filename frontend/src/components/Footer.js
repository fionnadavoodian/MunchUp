import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1520px] mx-auto px-4 py-10 bg-[#24262b] text-gray-300'>
            <div className='grid lg:grid-cols-3 gap-8'>
                <div>
                    <h1 className='text-3xl font-bold text-orange-500 mb-4'>MunchUp</h1>
                    <p className='mb-4'>
                        Labore culpa duis adipisicing consequat irure incididunt dolor aliquip. Aliqua veniam quis ex officia fugiat nulla esse occaecat irure et nulla dolor. Eiusmod sunt est exercitation ipsum ut et tempor sunt occaecat cillum officia enim duis veniam. Do enim laborum officia amet dolore dolore mollit culpa.
                    </p>
                    <div className='flex space-x-4'>
                        <FaFacebookSquare size={30} className='hover:text-white transition-colors duration-200' />
                        <FaInstagram size={30} className='hover:text-white transition-colors duration-200' />
                        <FaGithubSquare size={30} className='hover:text-white transition-colors duration-200' />
                        <FaTwitterSquare size={30} className='hover:text-white transition-colors duration-200' />
                        <FaDribbbleSquare size={30} className='hover:text-white transition-colors duration-200' />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-around mt-6 lg:mt-0'>
                    <div>
                        <h6 className='font-semibold text-[#9b9b9b] mb-4'>Company</h6>
                        <ul>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>About Us</li>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>Careers</li>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>Press</li>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-semibold text-[#9b9b9b] mb-4'>Support</h6>
                        <ul>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>Contact Us</li>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>Help Center</li>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>FAQs</li>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-semibold text-[#9b9b9b] mb-4'>Locations</h6>
                        <ul>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>New York</li>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>USA</li>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>India</li>
                            <li className='py-2 text-sm hover:text-white transition-colors duration-200'>Canada</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-600 mt-8 pt-8 text-center'>
                <p className='text-sm text-[#9b9b9b]'>
                    &copy; 2024 MunchUp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
