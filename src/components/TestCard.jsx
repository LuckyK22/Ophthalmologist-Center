import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function TestCard({
    testName,
    testDetails
}) {

    const navigate = useNavigate()
    const navigateToServiceDescription = () => {
        navigate('/serviceDescription')
    }

    return (
        <>
            <section className="relative z-20 overflow-hidden pb-12 dark:bg-dark lg:pb-[90px] lg:pt-[50px]">
                <div className="container mx-auto">
                    <div className=" lg:w-3/4 mx-auto border rounded-md cursor-pointer" onClick={navigateToServiceDescription}>
                        <div className="h-full  bg-opacity-75 px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium  mb-3 hover:underline">{testName}</h1>
                            <p className="leading-relaxed mb-3">{testDetails}</p>
                            <Link to="/" className="text-indigo-500 inline-flex items-center">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                <button className='border p-2 rounded-md text-indigo-500'>Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-24 z-[-1]">
                    <svg
                        width="1500"
                        height="800"
                        viewBox="0 0 1300 886"
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

export default TestCard