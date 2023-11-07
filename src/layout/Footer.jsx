
const Footer = () => {
    return (
        <div className="relative w-full">
            <div className="text-white flex justify-between  mr-[195px] ml-[111px] pt-[70px]">
                <div className=""> <p className="text-[40px] font-bold">Spohire.</p></div>
                <div>
                    <h2 className="text-[26.78px] font-semibold mb-[43px]">Info</h2>
                    <ul className="flex flex-col gap-[31px]">
                        <li className="text-[21.43px]">How it works</li>
                        <li className="text-[21.43px]">About us</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[26.78px] font-semibold mb-[43px]">Contact</h2>
                    <ul className="flex flex-col gap-[31px]">
                        <li className="text-[21.43px]">spohire@gmail.com</li>
                        <li className="text-[21.43px]">+48 565 25 654</li>
                        <li className="text-[21.43px]">+12 485 54684</li>
                    </ul>
                </div>
                <div className="flex flex-row items-center">
                     <p className="text-[26.78px] mr-9">Follow us</p>
                     <img className="cursor-pointer" src="/assets/footer/instragram.png" alt="" />
                     <img className="cursor-pointer" src="/assets/footer/facebook.png" alt="" />
                     <img className="cursor-pointer" src="/assets/footer/linkedin.png" alt="" />
                     <img className="cursor-pointer" src="/assets/footer/twitter.png" alt="" />

                </div>


            </div>
            <div className="flex text-white flex-row justify-center gap-[75px] mt-[115px] mb-[32px]">
                <p className="text-[21.43px]">Privacy policy</p>
                <p className="text-[21.43px]">Terms & condition</p>
                <p className="text-[21.43px]">AMSL All Right Reserved</p>
            </div>

            <div className="absolute bottom-0 left-0">
               <img src="/assets/footer/foot_bl.png" alt="" />
            </div>
            <div className="absolute top-0 right-0">
               <img src="/assets/footer/foot_tr.png" alt="" />
            </div>
        </div>
    );
};

export default Footer;