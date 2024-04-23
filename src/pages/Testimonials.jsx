import React from 'react'
import TestimonialComponents from '../components/TestimonialComponents';

function Testimonials() {
    return (
        <>
            <section className="relative z-20 overflow-hidden pb-12 dark:bg-dark lg:pb-[90px] lg:pt-[50px]">
                <div className="container mx-auto">
                    <section className="body-font">
                        <div className="container mt-10 px-5 py-10 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <TestimonialComponents
                                    testimonialComment='Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
                                    testimonialName='ALPER KAMU'
                                />
                                <TestimonialComponents
                                    testimonialComment='Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
                                    testimonialName='ALPER KAMU'
                                />
                                <TestimonialComponents
                                    testimonialComment='Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
                                    testimonialName='ALPER KAMU'
                                />
                            </div>
                        </div>
                    </section>

                </div>

                <div className="absolute bottom-0 right-24 z-[-1]">
                    <svg
                        width="1300"
                        height="1000"
                        viewBox="0 0 1600 886"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                            fill="url(#paint0_linear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="1300.65"
                                y1="1200.58"
                                x2="602.827"
                                y2="-418.681"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#3056D3" stop-opacity="0.36" />
                                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
        </>
    )
}

export default Testimonials