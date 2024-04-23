import React, { useState, useEffect } from 'react';
import eye from '../assets/eye.png';
import globe from '../assets/globe.png';
import crowd from '../assets/crowd.png';
import TestCard from '../components/TestCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function Services() {

    const [screenSize, setScreenSize] = useState(window.innerWidth < 600 ? 1 : 2);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth < 600 ? 1 : 2);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount



    return (
        <>
            <section className="body-font" id='services'>
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="w-1/3 sm:w-1/2 lg:w-1/3">
                            <img className='m-auto' width="50px" src={globe} alt="" srcset="" />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl">100+</h2>
                            <p className="leading-relaxed">Hospitals</p>
                        </div>
                        <div className="w-1/3 sm:w-1/2 lg:w-1/3">
                            <img className='m-auto' width="50px" src={crowd} alt="" />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl">10000+</h2>
                            <p className="leading-relaxed">Patient Treated</p>
                        </div>
                        <div className="w-1/3 sm:w-1/2 lg:w-1/3">
                            <img className='m-auto' width="50px" src={eye} alt="" srcset="" />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl">1000+</h2>
                            <p className="leading-relaxed">Eye Surgeries</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="body-font">
                <div className="container px-5 py-16 mx-auto">
                    <Swiper
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        slidesPerView={screenSize}
                        slidesPerGroup={1}
                        loop={true}
                    >
                        <SwiperSlide>
                            <TestCard
                                testName="Eye Test"
                                testDetails="Our eye tests cover visual acuity, refractive status, and ocular health. We assess refractive errors, examine the eye's anterior and posterior segments, and measure intraocular pressure for glaucoma screening. Personalized recommendations are then provided for optimal eye health and vision."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestCard
                                testName="Eye Test"
                                testDetails="Our eye tests cover visual acuity, refractive status, and ocular health. We assess refractive errors, examine the eye's anterior and posterior segments, and measure intraocular pressure for glaucoma screening. Personalized recommendations are then provided for optimal eye health and vision."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestCard
                                testName="Eye Test"
                                testDetails="Our eye tests cover visual acuity, refractive status, and ocular health. We assess refractive errors, examine the eye's anterior and posterior segments, and measure intraocular pressure for glaucoma screening. Personalized recommendations are then provided for optimal eye health and vision."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestCard
                                testName="Eye Test"
                                testDetails="Our eye tests cover visual acuity, refractive status, and ocular health. We assess refractive errors, examine the eye's anterior and posterior segments, and measure intraocular pressure for glaucoma screening. Personalized recommendations are then provided for optimal eye health and vision."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestCard
                                testName="Eye Test"
                                testDetails="Our eye tests cover visual acuity, refractive status, and ocular health. We assess refractive errors, examine the eye's anterior and posterior segments, and measure intraocular pressure for glaucoma screening. Personalized recommendations are then provided for optimal eye health and vision."
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Services;




