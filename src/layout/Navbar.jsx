
const Navbar = () => {
    return (
        <div className="bg-primary px-10">
            <div className="flex flex-row justify-between items-center">

            <div className="text-center  text-white text-[40px] font-bold leading-12">
                Spohire.
            </div>
            <div className="">
                <ul className="flex flex-row text-white gap-[51px]">
                    <li>Transfer Market</li>
                    <li>Job Offers</li>
                    <li>Announcements</li>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className="">
                <p>Log in</p>
                <div className="bg-[url('/assets/images/signup-border.png')] bg-no-repeat w-[150px] h-[52px] flex justify-center items-center rounded-[37px] overflow-hidden">

                    <p className="text-[20px] text-white">Sign Up</p>
                </div>
            </div>
            </div>
            </div>
            );
};

            export default Navbar;