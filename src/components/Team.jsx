import React from 'react'
import pic1 from '../assets/profile1.jpg'
import pic2 from '../assets/profile2.jpg'
import pic3 from '../assets/profile3.jpg'
import pic4 from '../assets/profile4.jpg'

const data = [
    {
        'id': 1,
        'profile': pic1,
        'name': "Aston Garry",
        'degree': 'PhD',
        'desc': 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
    },
    {
        'id': 2,
        'profile': pic2,
        'name': "Aston Garry",
        'degree': 'PhD',
        'desc': 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
    },
    {
        'id': 3,
        'profile': pic3,
        'name': "Aston Garry",
        'degree': 'PhD',
        'desc': 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
    },
    {
        'id': 4,
        'profile': pic4,
        'name': "Aston Garry",
        'degree': 'PhD',
        'desc': 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
    }
]

function Team() {
    return (
        <>
            <section className=" body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-semibold title-font mb-4  tracking-widest">OUR TEAM</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">

                        {
                            data.map((items) => (
                                <div className="p-4 lg:w-1/2" key={items.id}>
                                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={items.profile} />
                                        <div className="flex-grow sm:pl-8">
                                            <h2 className="title-font font-medium text-lg ">{items.name}</h2>
                                            <h3 className=" mb-3 text-gray-500">{items.degree}</h3>
                                            <p className="mb-4">{items.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team