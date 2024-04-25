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
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 



    return (
        <>
        <div>
            <section className="body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="w-1/3 sm:w-1/2 lg:w-1/3">
                            <img className='m-auto' width="50px" src={globe} alt="" srcSet="" />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl ms-3">100+</h2>
                            <p className="leading-relaxed text-indigo-500 font-semibold lg:text-2xl sm:text-lg ms-1">Hospitals</p>
                        </div>
                        <div className="w-1/3 sm:w-1/2 lg:w-1/3">
                            <img className='m-auto' width="50px" src={crowd} alt="" />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl ms-3">10000+</h2>
                            <p className="leading-relaxed text-indigo-500 font-semibold lg:text-2xl sm:text-lg ms-1">Patient Treated</p>
                        </div>
                        <div className="w-1/3 sm:w-1/2 lg:w-1/3">
                            <img className='m-auto' width="50px" src={eye} alt="" srcSet="" />
                            <h2 className="title-font font-medium sm:text-4xl text-3xl ms-3">1000+</h2>
                            <p className="leading-relaxed text-indigo-500 font-semibold lg:text-2xl sm:text-lg ms-1">Eye Surgeries</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="body-font">
                <div className="container px-5 py-4 mx-auto">
                    <Swiper
                        autoplay={{
                            delay: 1500,
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
            </div>
        </>
    );
}

export default Services;




