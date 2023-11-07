
const Navbar = () => {
    return (
        <div className="bg-primary lg:px-10 px-6 ">
            <div className="flex flex-row justify-between items-center py-6 ">

            <div className="w-[68px] h-[16px] lg:w-[156px] lg:h-[48px]">
                <img className="text-white" src="/assets/images/Spohire.png" alt="" />
            </div>
            <div className="">
                <ul className="lg:flex flex-row text-white gap-[51px] hidden">
                    <li>Transfer Market</li>
                    <li>Job Offers</li>
                    <li>Announcements</li>
                    <li>Pricing</li>
                </ul>
                <div className="w-4 h-4  lg:hidden sm:block md:block">
                <img className="w-full h-full" src="/assets/images/List.svg" alt="" />
                </div>
            </div>

            <div className="flex justify-center items-center lg:gap-[30px] gap-3">
                <p className="text-white lg:text-xl text-[10.67px] font-semibold cursor-pointer uppercase">Log in</p>
                <div className=" w-[80px] h-[27px] lg:w-[150px] lg:h-[52px] flex relative justify-center items-center rounded-[37px] overflow-hidden">
                  <img className="absolute" src=" /assets/images/signup-border.png" alt="" />
                    <p className="lg:text-[20px] text-[10.67px] text-white cursor-pointer">Sign Up</p>
                </div>
            </div>
            </div>
            </div>
            );
};

            export default Navbar;