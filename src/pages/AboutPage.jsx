import React from 'react'
import vision from '../assets/vision.png'
import mission from '../assets/mission.png'
import value from '../assets/value.png'
import Team from '../components/Team'
import Gallary from '../components/Gallary'
import chairman from '../assets/chairman.jpg'


function AboutPage() {

    return (
        <div className='mt-20'>
            <section className="body-font relative">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="text-3xl font-medium title-font mb-4">About Us</h1>
                        <p className=" mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify. Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    </div>
                </div>  
            </section>

            <section className="body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-full mx-auto flex flex-wrap items-center">
                        <img alt="ecommerce" className="lg:w-1/4 w-full lg:h-auto h-64 object-cover object-center rounded" src={chairman} />
                        <div className="lg:w-3/4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-2xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Degree Name</h2>
                            <p className="leading-relaxed mt-5">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="body-font">
                <div className="container px-5 py-8 mx-auto ">
                    <div className="flex flex-wrap -m-4 gap-16 justify-center">
                        <div className=" lg:w-1/4 border border-gray-300 shadow-md rounded-md">
                            <div className="h-full bg-opacity-75 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                                <img src={vision} className="title-font font-medium mb-1 m-auto w-24" />
                                <h1 className="title-font sm:text-2xl text-xl mb-3 mt-4 font-semibold">Our Vision</h1>
                                <p className="leading-relaxed mb-3">Leading the way in comprehensive eye care for healthier, happier lives.</p>
                            </div>
                        </div>
                        <div className=" lg:w-1/4 border border-gray-300 shadow-md rounded-md">
                            <div className="h-full bg-opacity-75 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                                <img src={mission} className="title-font font-medium mb-1 m-auto w-24" />
                                <h1 className="title-font sm:text-2xl text-xl mb-3 mt-4 font-semibold">Our Mission</h1>
                                <p className="leading-relaxed mb-3">Providing exceptional eye care with compassion and innovation.</p>
                            </div>
                        </div>
                        <div className=" lg:w-1/4 border border-gray-300 shadow-md rounded-md">
                            <div className="h-full bg-opacity-75 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                                <img src={value} className="title-font font-medium mb-1 m-auto w-24" />
                                <h1 className="title-font sm:text-2xl text-xl mb-3 mt-4 font-semibold">Our Value</h1>
                                <p className="leading-relaxed mb-3">Integrity, compassion, excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Team />
            <Gallary />
        </div>
    )
}

export default AboutPage