
const CustomersSay = ({ products }) => {

    return (
        <div className="mt-20 mx-20">
            <h2 className="text-center text-lg text-[#F4842B]">About Us</h2>
            <h3 className="text-center text-4xl font-bold mt-10">What Our Customers are Saying</h3>
            <div className="grid grid-cols-2 justify-center items-center mt-20 gap-10">
                <img src="/BlueBike.png" alt="" className="w-[600px] h-[449px] ml-auto" />
                <div>
                    <nav><img src="/custNav.png" alt="" className="w-183.75 h-21.25" /></nav>
                    <div className="overflow-scroll flex scroll-smooth [&::-webkit-scrollbar]:hidden scrollbar-none  p-4 gap-4  ">
                        {products && products.slice(0, 4).map((product) => (
                            <div key={product.id} className="">
                                <div>{<img src="/customerSay.png" alt="customerSay" className="max-w-[346.56px] h-80.75" />} </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersSay