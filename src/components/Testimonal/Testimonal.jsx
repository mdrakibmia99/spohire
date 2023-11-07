
const Testimonal = () => {
    return (
        <div className="bg-white w-full lg:pb-[100px] pb-[85px]">

            <div className="flex flex-col lg:pt-[108px] pt-[64px] gap-[18.74px] justify-center items-center">
                <h2 className="font-semibold lg:text-[68.21px] text-2xl">What people say</h2>
                <p className="font-medium lg:text-[22.74px] text-[10px] lg:mt-[18px] mt-[6px] lg:w-full w-[257px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit soldin.</p>
            </div>
            <div className="lg:mt-[75px] mt-6">
                <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[67px] gap-[14px] relative">
                    <img className="w-[340px] h-[287px] lg:w-[629px] lg:h-[533px]" src="/assets/testimonal/Testimonal 1.png" alt="" />
                    <img className="w-[340px] h-[287px] lg:w-[629px] lg:h-[533px]" src="/assets/testimonal/Testimonal 2.png" alt="" />
                    <div className="absolute lg:top-[50%] lg:left-[50%]  lg:w-[99px] lg:h-[99px] w-[61px] h-[61px] lg:rotate-0 rotate-90 ">
                    <img className="w-full h-full cursor-pointer" src="/assets/testimonal/Slider.svg" alt="" />
                </div>
                    
                </div>
                <div className="flex flex-col justify-center lg:mt-[139px] mt-[64px] ">
                    <h3 className="text-center lg:text-[34.70px] text-base text-[#8386A7] font-bold">Trusted by Greatest Companies</h3>

                    <div className="flex flex-wrap justify-between lg:w-[1343px] w-[340px] mx-auto lg:mt-[46px] mt-[35px] items-center lg:gap-0 gap-y-[36px]">
                        <img className="lg:w-[150px] w-[92px]" src="/public/assets/testimonal/Google.png" alt="" />
                        <img className="lg:w-[176px] w-[105px]" src="/public/assets/testimonal/airbnb2.png" alt="" />
                        <img className="lg:w-[145px] w-[89px]" src="/public/assets/testimonal/Creative3.png" alt="" />
                        <img className="lg:w-[236px] w-[140px]" src="/public/assets/testimonal/shopify4.png" alt="" />
                        <img className="lg:w-[173px] w-[110px]" src="/public/assets/testimonal/amazon5.png" alt="" />
                    </div>
                 
                </div>
                
            </div>
        </div>
    );
};

export default Testimonal;