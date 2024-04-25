import React, { useState, useEffect } from 'react';
import AppointmentPage from '../components/AppointmentPage';
import Facilities from '../components/Facilities';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import AppointmentModel from '../components/AppointmentModel';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Articles from '../components/Articles';

function FrontPage() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="heroSection h-screen bg-cover w-full flex lg:justify-end items-center">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper w-full"
                    slidesPerView={1}
                    slidesPerGroup={1}
                    loop={true}
                >
                    <SwiperSlide>
                        <section className='m-auto lg:text-5xl justify-center font-semibold flex w-full'>
                            <div className={`w-1/2 flex justify-end items-center ${isSmallScreen ? 'hidden' : ''}`}>
                                <div className='w-2/3 rounded-lg'>
                                    <img className='rounded-lg' src={banner1} alt="" />
                                </div>
                            </div>
                            <div className='lg:w-1/2 sm:w-full lg:mt-14'>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>Welcome to</p>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>Ophthalmologist's Center </p>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>Eye Care</p>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>&#x201F;Your <span className='text-indigo-500'>Vision</span> , Our <span className='text-indigo-500'>Priority</span>&#x201D;</p>
                                <div className=' lg:text-2xl mt-10 ms-6'>
                                    <AppointmentModel />
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className='m-auto lg:text-5xl justify-center font-semibold flex w-full'>
                            <div className={`w-1/2 flex justify-end items-center ${isSmallScreen ? 'hidden' : ''}`}>
                                <div className='w-2/3 rounded-lg'>
                                    <img className='rounded-lg' src={banner2} alt="" />
                                </div>
                            </div>
                            <div className='lg:w-1/2 sm:w-full lg:mt-14'>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>Welcome to</p>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>Ophthalmologist's Center </p>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>Eye Care</p>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>&#x201F;Your <span className='text-indigo-500'>Vision</span> , Our <span className='text-indigo-500'>Priority</span>&#x201D;</p>
                                <div className=' lg:text-2xl mt-10 ms-6'>
                                    <AppointmentModel />
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className='m-auto lg:text-5xl justify-center font-semibold flex w-full'>
                            <div className={`w-1/2 flex justify-end items-center ${isSmallScreen ? 'hidden' : ''}`}>
                                <div className='w-2/3 rounded-lg'>
                                    <img className='rounded-lg' src={banner3} alt="" />
                                </div>
                            </div>
                            <div className='lg:w-1/2 sm:w-full lg:mt-14'>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>Welcome to</p>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>Ophthalmologist's Center </p>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>Eye Care</p>
                                <p className='leading-relaxed text-center sm:text-4xl mt-4'>&#x201F;Your <span className='text-indigo-500'>Vision</span> , Our <span className='text-indigo-500'>Priority</span>&#x201D;</p>
                                <div className=' lg:text-2xl mt-10 ms-6'>
                                    <AppointmentModel />
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Services />
            <Facilities />
            <Articles />
            <Testimonials />
            <AppointmentPage />
            <FAQ />
        </>
    );
}

export default FrontPage;
