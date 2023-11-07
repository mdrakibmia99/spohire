const lists = [
    { className: "border-b_green", name: "Football" },
    { className: "border-b_violet", name: "Volleyball" },
    { className: "border-b_pink", name: "Football" },
    { className: "border-b_orange", name: "BASKETBALL" },
    { className: "border-b_violet2", name: "Handball" },
    { className: "border-b_green", name: "Volleyball" }

]
const FeatureTop = () => {
    return (
        <div className=" w-full pt-[40px] overflow-hidden">

            <ul className="lg:flex lg:flex-row lg:items-center lg:gap-x-[60px] lg:-ml-[100px] grid grid-cols-3 gap-[24px] px-[10px]">
                {
                    lists?.map((list,index) => (<>
                        <li className={`text-black div-item-center font-bold border-[1.73px] rounded-[52px] ${list.className} lg:w-[270px] lg:h-[73px] w-[118px] h-[37px] `} >
                            <div className="flex justify-center items-center">
                                <span className="text-black text-5xl  relative lg:-mt-7 -mt-8 lg:mr-5 mr-2">.</span>
                                <p className="lg:text-2xl text-[12.16px] text-black block list-disk uppercase"> {list.name}</p>
                            </div>
                        </li>
                        {lists.length-1 > index && <img className="w-[30px] h-[5px] lg:block hidden" src="/assets/images/dash.svg" alt="" />}
                    </>

                    ))
                }

                {/* <img className="w-[30px] h-[5px] " src="/assets/images/dash.svg" alt="" />
                <li className="text-black div-item-center font-bold border-[1.73px] rounded-[52px] border-b_violet w-[270px] h-[73px]">
                    <div className="flex justify-center items-center">
                        <span className="text-black text-5xl relative -mt-7 mr-5">.</span>
                        <p className="text-2xl text-black block list-disk uppercase"> Volleyball</p>
                    </div>
                </li>
                <img className="w-[30px] h-[5px] " src="/assets/images/dash.svg" alt="" />
                <li className="text-black div-item-center font-bold border-[1.73px] rounded-[52px] border-b_pink w-[270px] h-[73px]">
                    <div className="flex justify-center items-center">
                        <span className="text-black text-5xl relative -mt-7 mr-5">.</span>
                        <p className="text-2xl text-black block list-disk uppercase"> Football</p>
                    </div>
                </li>
                <img className="w-[30px] h-[5px] " src="/assets/images/dash.svg" alt="" />
                <li className="text-black div-item-center font-bold border-[1.73px] rounded-[52px] border-b_orange w-[270px] h-[73px]">
                    <div className="flex justify-center items-center">
                        <span className="text-black text-5xl relative -mt-7 mr-5">.</span>
                        <p className="text-2xl text-black block list-disk uppercase"> BASKETBALL</p>
                    </div>
                </li>

                <img className="w-[30px] h-[5px] " src="/assets/images/dash.svg" alt="" />
                <li className="text-black div-item-center font-bold border-[1.73px] rounded-[52px] border-b_violet2 w-[270px] h-[73px]">
                    <div className="flex justify-center items-center">
                        <span className="text-black text-5xl relative -mt-7 mr-5">.</span>
                        <p className="text-2xl text-black block list-disk uppercase"> Handball</p>
                    </div>
                </li>
                <img className="w-[30px] h-[5px] " src="/assets/images/dash.svg" alt="" /> */}
            </ul>
        </div>
    );
};

export default FeatureTop;