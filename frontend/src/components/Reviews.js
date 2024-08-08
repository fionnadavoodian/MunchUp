import React, { useEffect, useRef, useState } from 'react';
import { reviewsData } from '../data/data'; // Adjust the path as necessary
import { motion, useAnimation } from 'framer-motion';

const Reviews = () => {
    const containerRef = useRef(null);
    const controls = useAnimation();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Function to update scroll position
    const updateScrollPosition = () => {
        if (containerRef.current) {
            setScrollPosition(containerRef.current.scrollLeft);
        }
    };

    // Start the scrolling animation when component mounts
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            controls.start({
                x: [`-${scrollPosition}px`, `-${container.scrollWidth - container.clientWidth}px`],
                transition: { duration: 30, ease: 'linear', repeat: Infinity },
            });
            container.addEventListener('scroll', updateScrollPosition);
            return () => container.removeEventListener('scroll', updateScrollPosition);
        }
    }, [controls, scrollPosition]);

    // Handle hover events
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        controls.stop();
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        controls.start({
            x: [`-${scrollPosition}px`, `-${containerRef.current.scrollWidth - containerRef.current.clientWidth}px`],
            transition: { duration: 30, ease: 'linear', repeat: Infinity },
        });
    };

    return (
        <div className='py-10 bg-gray-100'>
            <h1 className='text-orange-500 font-bold text-3xl text-center mb-4'>Customer Reviews</h1>
            <div className='relative overflow-hidden'>
                <motion.div
                    ref={containerRef}
                    className='flex space-x-6'
                    animate={controls}
                    initial={{ x: '0%' }}
                >
                    {reviewsData.map((review, index) => (
                        <motion.div
                            key={review.id}
                            className='flex-none w-80 bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300'
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                                zIndex: hoveredIndex === index ? 10 : 'auto',
                            }}
                        >
                            <div className='m-auto py-2 px-4'>
                                <div className='flex justify-between items-center p-2'>
                                    <img
                                        className=' w-16 h-16 rounded-full border-4 border-orange-500 object-cover'
                                        src={review.avatar}
                                        alt={review.name}
                                    />
                                    <div className='flex flex-col'>
                                        <p className='text-md font-semibold'>{review.name}</p>
                                        <div className='text-yellow-500 flex items-center'>
                                            {"⭐".repeat(review.rating)}
                                        </div>
                                    </div>
                                </div>
                                <p className='text-gray-800 my-2 text-xl'>{review.review}</p>
                                <span className='text-gray-500 text-xs'>{review.date}</span>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Reviews;
