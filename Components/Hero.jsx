import React from 'react'
import { LuCircleArrowRight } from 'react-icons/lu'

const Hero = () => {
    return (
        <div className=" h-screen w-full bg-[url('/Hero-bike.png')] bg-cover bg-center">
            <div className='absolute bg-[#0000007D] h-full w-full opacity-100'>
            <div className='grid grid-cols-2 items-center pt-30'>
                <div className='grid gap-4'>
                    <img src="/Eco.png" alt="ecogreen" width={120} />
                    <h1 className='font-extrabold text-white text-[74px] leading-[100%] tracking-normal capitalize'>Power Your journey. charge your future</h1>
                    <p className='text-white text-2xl'>Explore a new era of electric mobility with EV’s built for urban delivery, sustainability and convenience... </p>
                    <div className='flex gap-6'>
                        <button className='flex items-center gap-2 bg-[#F18729] text-white border border-[#FEFEFE] text-sm px-8 py-2 rounded-2xl '>SHOP NOW <LuCircleArrowRight className='text-2xl' /></button>
                        <button className='flex items-center gap-2 text-[#042C5B] bg-[#FFFFFF] border border-[#FEFEFE] text-sm px-8 py-2 rounded-2xl '>CHARGING STATIONS<LuCircleArrowRight className='text-2xl'/></button>


                    </div>
                    <div className='mt-15'>
                        <h2 className='text-lg text-white'>OUR PARTNERS</h2>
                        <div className='flex gap-10 items-center h-6'>
                            <img src="/logoipsum.png" alt="" width={128.82} />
                               <img src="/Hyper.png" alt="" width={128.82} className='h-20'/>
                                  <img src="/commentlogoipsum.png" alt="" width={128.82}/>
                                     <img src="/starLogoipsum.png" alt="" width={128.82}/>
                        </div>
                    </div>

                </div>

                <div className='ml-auto'><img src="/BikeArrow.png" alt="bike-arrow" className='w-21' /></div>

            </div>
            </div>
        </div>
    )
}

export default Hero