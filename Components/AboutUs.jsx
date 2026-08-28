import React from 'react'

const AboutUs = () => {
    return (
        <div className='grid grid-cols-2 mx-20 mt-20'>
            <div className='flex gap-4'>
                <div id='left-car' className='relative'>
                    <div className='absolute top-[80px] left-[80px] bg-white w-31 h-30.5 px-4 py-2 rounded-xl'>
                        <h3 className='text-[32px] font-bold text-[#042C5B]'>329K</h3>
                        <p className='text-[12px]'>Charging Stations</p>
                        <p className='py-1 w-13.75 bg-[#F4842B]'></p>
                    </div>
                    <div className='bg-[#042C5B] p-16 w-[282px] h-[86px] mb-4 rounded-tl-[80px]'></div>
                    <img src="/AboutCar.png" alt="about-car" className='w-[282px] h-[423px]' />
                </div>

                <div id='right-gas' className='relative rotate-180'>
                    <div className='absolute top-[80px] z-10 left-[80px] bg-white w-31 h-30.5 px-4 py-2 rounded-xl rotate-180'>
                        <h3 className='text-[32px] font-bold text-[#042C5B]'>682K</h3>
                        <p className='text-[12px]'>EV <br /> Vehicles</p>
                        <p className='py-1 w-13.75 bg-[#042C5B]'></p>
                    </div>
                    <div className='bg-[#F4842B] p-16 w-[282px] h-[86px] mb-4 rounded-tl-[80px]'></div>
                    <img src="/AboutGas.png" alt="about-Gas" className='w-[282px] h-[423px] rotate-180' />
                </div>
            </div>
            <div className=''>
                <h4 className='text-[#F4842B] text-lg'>ABOUT US</h4>
                <h2 className='text-[#042C5B] text-[36px]'>Driving Africa’s Electric Future</h2>
                <p className='text-[#797979]'> At RoadRunner EV, we’re on a mission to revolutionize mobility through clean, smart, and accessible electric transportation. From eco-friendly tricycles to innovative battery swap services and expanding EV infrastructure, we provide solutions that power businesses and individuals alike. Built for performance and sustainability, our vehicles are designed to meet the unique challenges of urban and rural transportation — all while reducing carbon emissions and fueling progress.</p>
                <div>
                    <h3 className='text-[#042C5B] mt-4 text-[36px]'>Why RoadRunner?</h3>
                    <p className='text-[#797979]'>
                        <span className='text-[#042C5B] text-3xl'>✔</span> Affordable, high-performing EVs <br />
                        <span className='text-[#042C5B] text-3xl'>✔</span> Convenient battery swap and charging networks <br />
                        <span className='text-[#042C5B] text-3xl'>✔</span> Trusted by riders, businesses, and delivery services <br />
                        <span className='text-[#042C5B] text-3xl'>✔</span> Committed to a greener, smarter tomorrows. <br />
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AboutUs;