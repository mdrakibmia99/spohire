
const FeatureCart = () => {
    return (
        <div className="grid grid-cols-3 gap-5 mt-[60px] overflow-hidden">
            <div className="max-w-[560px] h-[360px] bg-[url('/assets/feature/bg-1.png')] bg-no-repeat grid items-center relative">
                <div className=" w-[273px] ml-[50px]">
                    <h1 className="text-3xl mb-[13px] font-bold">Confidentiality</h1>
                    <p className="text-lg">I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.</p>
                </div>

                <div className="min-w-[378px] absolute right-[-85px]">
                    <img src="/assets/feature/feature1.png" alt="" />
                </div>

            </div>
            <div className="max-w-[560px] h-[360px] bg-[url('/assets/feature/bg-2.png')] bg-no-repeat grid items-center relative">
                <div className="w-[243px] ml-[50px]">
                    <h1 className="text-3xl mb-[13px] font-bold">Stay in Touch</h1>
                    <p className="text-lg">I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.</p>
                </div>

                <div className="min-w-[378px] c absolute right-[-55px]">
                    <img src="/assets/feature/feature2.png" alt="" />
                </div>

            </div>
            <div className="max-w-[560px] h-[360px] bg-[url('/assets/feature/bg-3.png')] bg-no-repeat grid items-center relative">
                <div className="w-[273px] ml-[50px]">
                    <h1 className="text-3xl mb-[13px] font-bold">Confidentiality</h1>
                    <p className="text-lg">I can tell you first hand, <br /> ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.</p>
                </div>

                <div className="min-w-[378px] absolute right-[-85px]">
                    <img src="/assets/feature/feature3.png" alt="" />
                </div>

            </div>
         
        </div>
    );
};

export default FeatureCart;