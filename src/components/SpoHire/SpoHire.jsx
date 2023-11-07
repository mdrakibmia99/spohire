
const SpoHire = () => {
    return (
        <div className="bg-black grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="lg:w-full lg:h-[1002px] w-[397px] h-[528px] lg:order-1 order-2 mx-auto">
             <img className="h-full" src="/assets/images/why.png" alt="" />
            </div> 
            <div className="text-white lg:pb-[169px] lg:mb-[40px] mb-0 lg:order-2 order-1 flex flex-col lg:justify-start justify-center lg:items-stretch items-center px-[23px]">
                <h2 className="lg:text-[82px] lg:mt-[202px] mt-[32px] text-[36px] lg:w-[548px] w-[330px] lg:text-start text-center font-bold ">Why we <span className="lg:block inline ">made Spohire</span></h2>
                 <h4 className="lg:text-[32px] text-[14px] lg:my-[30px] my-[10px] w-[296px] lg:w-[650px] lg:text-start text-center">We aimed to simplify the process of  finding a club for the player and coach.</h4>
                 <ul className="list-disc ml-5 ">
                    <li className="lg:text-lg text-[11px] leading-[30px] text-center lg:text-start ">I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed <br /> up our working process by 125%. The access to blockchain information was never easier.</li>
                    <li className="lg:text-lg text-[11px] leading-[30px] text-center lg:text-start  my-5">I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed <br /> up our working process by 125%. The access to blockchain information was never easier.</li>
                    <li className="lg:text-lg text-[11px] leading-[30px] text-center lg:text-start ">I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed <br /> up our working process by 125%. The access to blockchain information was never easier.</li>
                 </ul>
                 <div className="div-item-center rounded-[60px] bg-[#4075FF] lg:w-[322px] w-[112px] cursor-pointer lg:h-[80px] h-[37px] mt-[50px] mb-[40px] lg:mb-0">
                    <button className="lg:text-2xl text-[9px] font-bold ">Get Started Now</button>
                 </div>
                </div> 
          

        </div>
    );
};

export default SpoHire;