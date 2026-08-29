import { BsArrowUpRightCircleFill } from "react-icons/bs"
import { LuCircleArrowRight } from "react-icons/lu"

const DeliveryBikes = ({ products }) => {

    return (
        <div className="mt-20 mx-20">
            <div className="flex items-center justify-between">
                <h2 className="text-[36px] font-bold">Delivery Bikes</h2>
                <button className='flex items-center gap-2 text-[#042C5B] bg-[#FFFFFF] border border-[#042C5B] text-lg px-8 py-2 rounded-full '>SEE ALL<LuCircleArrowRight className='text-2xl' /></button>
            </div>
            <div className="flex mt-4 gap-4">
                {products && products.slice(0, 3).map((product) =>
                (
                    <div key={product.id} className="rounded-2xl bg-[#F3F3F3]">
                        {/* <h3 className="border">{product.title}</h3> */}
                        <div className="bg-white">{<img src="/Bikes.png" />}
                            <div className="flex items-center justify-between">
                                {/* <p>{product.price}</p> */}
                                <BsArrowUpRightCircleFill />
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>

            <div className="flex items-center justify-between mt-20">
                <h2 className="text-[36px] font-bold">Tricycles </h2>
                <button className='flex items-center gap-2 text-[#042C5B] bg-[#FFFFFF] border border-[#042C5B] text-lg px-8 py-2 rounded-full '>SEE ALL<LuCircleArrowRight className='text-2xl' /></button>
            </div>
            <div className="flex mt-4 gap-4">
                {products && products.slice(0, 3).map((product) =>
                (
                    <div key={product.id} className="rounded-2xl bg-[#F3F3F3]">
                        {/* <h3 className="border">{product.title}</h3> */}
                        <div className="bg-white">{<img src="/Tricycle.png" />}
                            <div className="flex items-center justify-between">
                                {/* <p>{product.price}</p> */}
                                <BsArrowUpRightCircleFill />
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>


            <div className="flex items-center justify-between mt-20">
                <h2 className="text-[36px] font-bold">Scooter Bikes </h2>
                <button className='flex items-center gap-2 text-[#042C5B] bg-[#FFFFFF] border border-[#042C5B] text-lg px-8 py-2 rounded-full '>SEE ALL<LuCircleArrowRight className='text-2xl' /></button>
            </div>
            <div className="flex mt-4 gap-4">
                {products && products.slice(0, 3).map((product) =>
                (
                    <div key={product.id} className="rounded-2xl bg-[#F3F3F3]">
                        {/* <h3 className="border">{product.title}</h3> */}
                        <div className="bg-white">{<img src="/Scooter.png" />}
                            <div className="flex items-center justify-between">
                                {/* <p>{product.price}</p> */}
                                <BsArrowUpRightCircleFill />
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>


               <div className="flex items-center justify-between mt-20">
                <h2 className="text-[36px] font-bold">EV Cars </h2>
                <button className='flex items-center gap-2 text-[#042C5B] bg-[#FFFFFF] border border-[#042C5B] text-lg px-8 py-2 rounded-full '>SEE ALL<LuCircleArrowRight className='text-2xl' /></button>
            </div>
            <div className="flex mt-4 gap-4">
                {products && products.slice(0, 3).map((product) =>
                (
                    <div key={product.id} className="rounded-2xl bg-[#F3F3F3]">
                        {/* <h3 className="border">{product.title}</h3> */}
                        <div className="bg-white">{<img src="/Scooter.png" />}
                            <div className="flex items-center justify-between">
                                {/* <p>{product.price}</p> */}
                                {/* <BsArrowUpRightCircleFill /> */}
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>


        </div>





    )
}

export default DeliveryBikes