const HeroSection = () => {
    return (
        <div className="grid grid-cols-12 items-center">
            <div className="col-span-6">

            <div className="w-[411px] h-[51px] border-[1.50px] rounded-[52.05px] border-white div-item-center">
                <p className="text-white text-[16px] w-[337px] h-[30px]  tracking-[0.32px]  flex justify-center items-center ">Sports + Announcements only for you</p>
            </div>
            <div className="w-[480px] h-[105px] mt-[30px] mb-[12.4px]">
                <img className="w-full h-full" src="/assets/images/Ready-to-get-text.png" alt="" />
            </div>

            <div className="w-[691px] h-[180px]">
                <p className="text-[82px] text-white leading-[90px]">Get matched with new sports club</p>

            </div>
            <div className="w-[480px] h-[43px] mt-5 mb-10">
                <p className="text-white text-2xl">Add your profile and join a new sports team</p>
            </div>
            <div className="max-w-[322px] h-[80px] bg-blue-btn rounded-[60px] div-item-center text-white">
             <p className="text-2xl ">Get Started Now</p>
            </div>
            </div>

            <div className="col-span-6">
                <img src="/assets/images/hero-banner-image.png" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;