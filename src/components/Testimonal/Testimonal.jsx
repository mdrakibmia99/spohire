
const Testimonal = () => {
    return (
        <div className="bg-white w-full pb-[100px]">

            <div className="flex flex-col pt-[108px] gap-[18.74px] justify-center items-center">
                <h2 className="font-semibold text-[68.21px]">What people say</h2>
                <p className="font-medium text-[22.74px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit soldin.</p>
            </div>
            <div className="mt-[75px] ">
                <div className="flex  justify-center gap-x-[67px] relative">
                    <img src="/assets/testimonal/Testimonal 1.png" alt="" />
                    <img src="/assets/testimonal/Testimonal 2.png" alt="" />
                    <div className="absolute top-[50%] left-[50%] w-[99px] h-[99px]">
                    <img className="w-full h-full cursor-pointer" src="/assets/testimonal/Slider.svg" alt="" />
                </div>
                    
                </div>
                <div className="flex justify-center mt-[139px] ">

                <img className="" src="/assets/testimonal/foot.png" alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Testimonal;