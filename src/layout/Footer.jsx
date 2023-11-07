
const Footer = () => {
    return (
        <div className="relative w-full z-50">
            <div className="text-white grid lg:grid-cols-3 z-40 grid-cols-1   px-[64px] lg:pt-[70px] pt-6">
                <div className="order-1"> <p className="lg:text-[40px] text-[24px] font-bold text-center lg:text-start">Spohire.</p></div>
                <div className="flex justify-between lg:order-2 order-3 mt-[41px] lg:mt-0">

                <div>
                    <h2 className="lg:text-[26.78px] font-semibold lg:mb-[43px] mb-[23px] text-[14px]">Info</h2>
                    <ul className="flex flex-col lg:gap-[31px] gap-4">
                        <li className="text-[11px] lg:text-[21.43px]">How it works</li>
                        <li className="text-[11px] lg:text-[21.43px]">About us</li>
                    </ul>
                </div>
                <div>
                    <h2 className="lg:text-[26.78px] text-[14px] font-semibold lg:mb-[43px] mb-[23px]">Contact</h2>
                    <ul className="flex flex-col lg:gap-[31px] gap-4">
                        <li className="text-[11px] lg:text-[21.43px]">spohire@gmail.com</li>
                        <li className="text-[11px] lg:text-[21.43px]">+48 565 25 654</li>
                        <li className="text-[11px] lg:text-[21.43px]">+12 485 54684</li>
                    </ul>
                </div>
                </div>
                <div className="flex justify-center flex-row items-center lg:order-3 order-2 mt-[34px] lg:mt-0">
                     <p className="lg:text-[26.78px] text-[14px] ">Follow us</p>
                     <img className="cursor-pointer lg:w-[34px] lg:h-[34px] w-[23px] h-[23px]" src="/assets/footer/instragram.png" alt="" />
                     <img className="cursor-pointer lg:w-[34px] lg:h-[34px] w-[23px] h-[23px]" src="/assets/footer/facebook.png" alt="" />
                     <img className="cursor-pointer lg:w-[34px] lg:h-[34px] w-[23px] h-[23px]" src="/assets/footer/linkedin.png" alt="" />
                     <img className="cursor-pointer lg:w-[34px] lg:h-[34px] w-[23px] h-[23px]" src="/assets/footer/twitter.png" alt="" />

                </div>


            </div>
            <div className="flex text-white flex-row justify-center lg:gap-[75px] gap-[40px] lg:mt-[115px] mt-[24px] mb-[32px] z-40">
                <p className=" text-[11px] whitespace-nowrap lg:text-[21.43px]">Privacy policy</p>
                <p className=" text-[11px] whitespace-nowrap lg:text-[21.43px]">Terms & condition</p>
                <p className=" text-[11px] whitespace-nowrap lg:text-[21.43px]">AMSL All Right Reserved</p>
            </div>

            <div className="absolute bottom-0 left-0 -z-10">
               <img src="/assets/footer/foot_bl.png" alt="" />
            </div>
            <div className="absolute top-0 right-0 -z-10">
               <img src="/assets/footer/foot_tr.png" alt="" />
            </div>
        </div>
    );
};

export default Footer;