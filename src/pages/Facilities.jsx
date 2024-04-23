import React from 'react'
import FacilityComponent from '../components/FacilityComponent'

function Facilities() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <FacilityComponent 
                        facilityName='You Can Find Us Everywhere'
                        facilityDetails='150+ super specialty eye care centres across World.'
                        svgPath='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
                        facilityNumber='1'
                    />
                    <FacilityComponent
                        facilityName='Access To World-Class Technology'
                        facilityDetails='500+ highly qualified eye specialists with their collective experience are ready to treat you.'
                        svgPath='M22 12h-4l-3 9L9 3l-3 9H2'
                        facilityNumber='2'
                    />
                    <FacilityComponent
                        facilityName='We Revolutionizes Eye Care'
                        facilityDetails='With us, your treatment is backed by continuous clinical research.'
                        svgPath='M12 22V8M5 12H2a10 10 0 0020 0h-3'
                        facilityNumber='3'
                    />
                    <FacilityComponent
                        facilityName='Strong Support Systems'
                        facilityDetails='Our 5000+ staff members are as experienced as our doctors when it comes to caring for you.Millions of our happy patients can testify to that.'
                        svgPath='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'
                        facilityNumber='4'
                    />
                </div>
            </section>
        </>
    )
}

export default Facilities