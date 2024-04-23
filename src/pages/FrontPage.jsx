import React from 'react'
import Footer from '../components/Footer'
import AppointmentPage from './AppointmentPage'
import Facilities from './Facilities'
import Services from './Services'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import AppointmentModel from '../components/AppointmentModel'

function FrontPage() {
    return (
        <>
            <div className='heroSection h-screen bg-cover w-full flex lg:justify-end items-center'>
                <section className='text-white lg:text-5xl float-end lg:mx-40 font-semibold'>
                    <p className='lg:text-right leading-relaxed ms-6'>Welcome to</p>
                    <p className='lg:text-right leading-relaxed ms-6'>Ophthalmologist's Center </p>
                    <p className='lg:text-right leading-relaxed ms-6'>Eye Care</p>
                    <p className='lg:text-right leading-relaxed ms-6'>&#x201F;Your <span className='text-indigo-500'>Vision</span> , Our <span className='text-indigo-500'>Priority</span>&#x201D;</p>
                    <div className='lg:text-end lg:text-2xl mt-10 ms-6'>
                        <AppointmentModel />
                    </div>
                </section>
            </div>
            <Services />
            <Facilities />
            <Testimonials />
            <AppointmentPage />
            <FAQ />
        </>
    )
}

export default FrontPage