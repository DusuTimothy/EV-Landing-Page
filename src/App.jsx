import React from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
import DeliveryBikes from '../Components/DeliveryBikes'
import useFetch from './useFetch'
import Certification from '../Components/Certification'
import CustomersSay from '../Components/CustomersSay'

const App = () => {
   const { data, isLoading, error } = useFetch('https://dummyjson.com/products');
    console.log(data);

    if (isLoading) {
    return <div className='bg-green-500 shadow-2xl text-white md:text-4xl font-bold p-8 md:px-30 mt-[25%] '>Loading Products Please Wait!... </div>
    }

    if (error) {
    return <div>Error: {error}</div>
    }
  return (
    <div className=''>
      <Nav />
      <Hero />
      <AboutUs />
      <DeliveryBikes products={data?.products} />
      <Certification />
      <CustomersSay products={data?.products} />
        
    </div>
  )
}

export default App