import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'

const Nav = () => {
    return (
        <div className='flex justify-between text-2xl items-center py-4'>
            <div><img src="/EV-logo1.png" alt="Ev-logo" /></div>
            <div className='flex gap-10'>
                <div className=''>
                    <label htmlFor="products" className='text-[#FFA70F] font-semibold'>Products</label>
                    <select name="cars" id="cars" >
                        <option value=""></option>
                        <option value="bike">Bike</option>
                        <option value="sport">Sport</option>
                        <option value="BMW">BMW</option>
                    </select>
                </div>
                <a href="">Battery Swap</a>
                <a href="">Charging Stations</a>
                <a href="">Contact Us</a>
            </div>

            <div className='flex gap-4'>
                <div className='flex items-center justify-center bg-[#F5F5F5] rounded-4xl pl-2 border border-[#F5F5F5]'>
                    <CiSearch className='text-2xl' />
                    <input
                        type="text"
                        placeholder='Search...'
                        className='text-sm'
                    />
                </div>
                <div className='flex text-4xl'>
                    <IoCartOutline />
                    <div className='absolute right-0 p-2 rounded-full bg-[#FFA70F]'></div>
                </div>
            </div>
        </div>
    )
}

export default Nav