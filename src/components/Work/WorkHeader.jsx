
const WorkHeader = () => {
    return (
        <div className="w-full">
            <div className="text-white font-bold text-center lg:mt-[103.73px] mt-[33px]"> <h1 className="text-white font-bold lg:text-[79.83px] text-2xl">How it works</h1></div>
            <div className="lg:text-[23.95px] text-[13.47px] lg:mt-[51px] mt-[37px]  lg:mb-[99px] mb-[39px]  lg:w-[720px] w-[346px] mx-auto text-white flex justify-center items-center lg:h-[88px] h-[49px] bg-[url('/assets/work/bg.png')] bg-no-repeat">
                <div className="lg:w-[195px] lg:h-[66.5px] w-[109px] h-[37px]  cursor-pointer rounded-[11.98px]  div-item-center bg-[url('/assets/work/btn-bg.png')] bg-no-repeat"><p className="lg:text-[23.95px] text-[13.47px]">Player</p></div>
                <p className="lg:mr-[117px] lg:ml-[101px] ml-[41px] mr-[26px] cursor-pointer lg:text-[23.95px] text-[13.47px]">Coach</p>
               <p className="cursor-pointer lg:text-[23.95px] text-[13.47px]">Manager/Agent</p>

            </div>
        </div>
    );
};

export default WorkHeader;