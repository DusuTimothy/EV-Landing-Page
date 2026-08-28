import React from 'react'

const AboutUs = () => {
    return (
        <div className='grid grid-cols-2 '>
            <div>
                <div id='left-car'>
                    <div className='absolute bg-white w-31 h-30.5 px-4 py-2 rounded-xl'>
                        <h3 className='text-[32px] font-bold text-[#042C5B]'>329K</h3>
                        <p className='text-[12px]'>Charging Stations</p>
                        <p className='py-1 w-13.75 bg-[#F4842B]'></p>
                    </div>
                    <div></div>
                    <img src="/AboutCar.png" alt="" />
                </div>
                <div id='right-gas'>
                    <img src="" alt="" />

                </div>
            </div>
            <div className=''>
                <h4 className='text-[#F4842B]'>ABOUT US</h4>
                <h2 className='text-[#042C5B] text-[36px]'>Driving Africa’s Electric Future</h2>
                <p className='text-[#797979]'> At RoadRunner EV, we’re on a mission to revolutionize mobility through clean, smart, and accessible electric transportation. From eco-friendly tricycles to innovative battery swap services and expanding EV infrastructure, we provide solutions that power businesses and individuals alike. Built for performance and sustainability, our vehicles are designed to meet the unique challenges of urban and rural transportation — all while reducing carbon emissions and fueling progress.</p>
                <div>
                    <h3 className='text-[#042C5B] text-[36px]'>Why RoadRunner?</h3>
                    <p className='text-[#797979]'>
                        <span>✔</span> Affordable, high-performing EVs <br />
                        <span>✔</span> Convenient battery swap and charging networks <br />
                        <span>✔</span> Trusted by riders, businesses, and delivery services <br />
                        <span>✔</span> Committed to a greener, smarter tomorrows. <br />
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AboutUs;