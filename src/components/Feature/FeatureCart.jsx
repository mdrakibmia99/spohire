
const FeatureCart = () => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center lg:justify-items-start lg:gap-5 gap-4 mt-[60px] overflow-hidden">
            <div className="lg:w-[560px] lg:h-[360px] w-[297px] h-[191px] bg-[url('/assets/feature/bg-1.png')] bg-no-repeat grid items-center relative">
                <div className=" lg:w-[273px] w-[144px] lg:ml-[50px] ml-[26px]">
                    <h1 className="lg:text-3xl text-[17px] mb-[13px] font-bold">Confidentiality</h1>
                    <p className="lg:text-lg text-[9.50px]">I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.</p>
                </div>

                <div className="lg:w-[378px] w-[158px] absolute lg:right-[-85px] right-[-30px] bottom-0">
                    <img src="/assets/feature/feature1.png" alt="" />
                </div>

            </div>
             {/* first card  */}
             <div className="lg:w-[560px] lg:h-[360px] w-[297px] h-[191px] bg-[url('/assets/feature/bg-2.png')] bg-no-repeat grid items-center relative">
                <div className=" lg:w-[273px] w-[144px] lg:ml-[50px] ml-[26px]">
                    <h1 className="lg:text-3xl text-[17px] mb-[13px] font-bold">Stay in Touch</h1>
                    <p className="lg:text-lg text-[9.50px]">I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.</p>
                </div>

                <div className="lg:w-[378px] w-[158px]  lg:h-[360px] h-[191px] absolute lg:left-[235px] left-[157px] bottom-0">
                    <img className="w-full h-full" src="/assets/feature/feature2.png" alt="" />
                </div>

            </div>
             {/* second card  */}
             <div className="lg:w-[560px] lg:h-[360px] w-[297px] h-[191px] bg-[url('/assets/feature/bg-3.png')] bg-no-repeat grid items-center relative">
                <div className=" lg:w-[273px] w-[144px] lg:ml-[50px] ml-[26px]">
                    <h1 className="lg:text-3xl text-[17px] mb-[13px] font-bold">Confidentiality</h1>
                    <p className="lg:text-lg text-[9.50px]">I can tell you first hand, <br /> ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.</p>
                </div>

                <div className="lg:w-[378px] w-[158px] absolute lg:right-[-85px] right-[-30px] bottom-0">
                    <img className="w-full h-full" src="/assets/feature/feature3.png" alt="" />
                </div>

            </div>
            


            {/* <div className="max-w-[560px] h-[360px] bg-[url('/assets/feature/bg-2.png')] bg-no-repeat grid items-center relative">
                <div className="w-[243px] ml-[50px]">
                    <h1 className="text-3xl mb-[13px] font-bold">Stay in Touch</h1>
                    <p className="text-lg">I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.</p>
                </div>

                <div className="min-w-[378px] c absolute right-[-55px]">
                    <img src="/assets/feature/feature2.png" alt="" />
                </div>

            </div> */}
            {/* <div className="max-w-[560px] h-[360px] bg-[url('/assets/feature/bg-3.png')] bg-no-repeat grid items-center relative">
                <div className="w-[273px] ml-[50px]">
                    <h1 className="text-3xl mb-[13px] font-bold">Confidentiality</h1>
                    <p className="text-lg">I can tell you first hand, <br /> ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.</p>
                </div>

                <div className="min-w-[378px] absolute right-[-85px]">
                    <img src="/assets/feature/feature3.png" alt="" />
                </div>

            </div> */}
         
        </div>
    );
};

export default FeatureCart;