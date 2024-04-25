import React from 'react'
import FacilityComponent from './FacilityComponent'



function Facilities() {
    const facilities = [
        {
            'facilityName': 'You Can Find Us Everywhere',
            'facilityDetails': '150+ super specialty eye care centres across World.',
            'svgPath': 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
            'facilityNumber': '1',
        },
        {
            'facilityName': 'Access To World-Class Technology',
            'facilityDetails': '500+ highly qualified eye specialists with their collective experience are ready to treat you.',
            'svgPath': 'M22 12h-4l-3 9L9 3l-3 9H2',
            'facilityNumber': '2',
        },
        {
            'facilityName': 'We Revolutionizes Eye Care',
            'facilityDetails': 'With us, your treatment is backed by continuous clinical research.',
            'svgPath': 'M12 22V8M5 12H2a10 10 0 0020 0h-3',
            'facilityNumber': '3',
        },
        {
            'facilityName': 'Strong Support Systems',
            'facilityDetails': 'Our 5000+ staff members are as experienced as our doctors when it comes to caring for you.Millions of our happy patients can testify to that.',
            'svgPath': 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2',
            'facilityNumber': '4',
        }
    ]
    
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    {facilities.map((items) => (
                        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto" key={items.facilityNumber}>
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-indigo-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 relative z-10 title-font font-medium text-sm text-white">{items.facilityNumber}</div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100  rounded-full inline-flex items-center justify-center hover:text-indigo-700 duration-200">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                        <path d={items.svgPath}></path>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 ">
                                    <h2 className="font-medium title-font  mb-1 text-xl">{items.facilityName}</h2>
                                    <p className="leading-relaxed">{items.facilityDetails}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
    
}

export default Facilities


