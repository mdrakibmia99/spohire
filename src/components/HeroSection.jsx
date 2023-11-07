const HeroSection = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center ">
            <div className=" lg:ml-[174px] ml-0 flex justify-start lg:items-start items-center flex-col">

            <div className="lg:w-[411px] lg:h-[51px] w-[218px] h-[27]  border-[1.50px] rounded-[52.05px] border-white div-item-center lg:mt-0 mt-[32px]">
                <p className="text-white lg:text-[16px] text-[8.50px] lg:w-[337px] lg:h-[30px] w-[179px] h-[16px] tracking-[0.32px]  flex justify-center items-center  ">Sports + Announcements only for you</p>
            </div>
            <div className="lg:w-[480px] lg:h-[105px] w-[255px] h-[56px] lg:mt-[30px] mt-[20px] lg:mb-[12.4px] mb-[4px]">
                <img className="w-full h-full" src="/assets/images/Ready-to-get-text.png" alt="" />
            </div>

            <div className="lg:w-[691px] lg:h-[180px] w-[300px] h-[95px]">
                <p className="lg:text-[82px] text-[36px] text-white lg:leading-[90px] leading-[46px] lg:text-start text-center">Get matched with new sports club</p>

            </div>
            <div className="lg:w-[480px] lg:h-[43px] w-[216px] h-[19px] lg:mt-5 mt-[10px]  lg:mb-10 mb-5">
                <p className="text-white lg:text-2xl text-[10.80px]">Add your profile and join a new sports team</p>
            </div>
            <div className="lg:w-[322px] lg:h-[80px] w-[112px] h-[37px] bg-blue-btn rounded-[60px] div-item-center cursor-pointer text-white">
             <p className="lg:text-2xl text-[9px]">Get Started Now</p>
            </div>
            </div>

            <div className="w-[469px] h-[455px] lg:w-full lg:h-full overflow-hidden ml-[-70px] mt-[44px] lg:mt-0">
                <img className="w-full h-full" src="/assets/images/hero-banner-image.png" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;