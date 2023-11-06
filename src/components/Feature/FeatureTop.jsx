
const FeatureTop = () => {
    return (
        <div className=" w-full pt-[40px] overflow-hidden">

            <ul className="flex flex-row items-center gap-x-[60px] -ml-[100px]">
                <li className=" text-black div-item-center font-bold border-[1.73px] rounded-[52px] border-b_green w-[270px] h-[73px]">
                    <div className="flex justify-center items-center">
                        <span className="text-black text-5xl relative -mt-7 mr-5">.</span>
                        <p className="text-2xl text-black block list-disk uppercase"> Football</p>
                    </div>
                </li>
                <img className="w-[30px] h-[5px] " src="/public/assets/images/dash.svg" alt="" />
                <li className="text-black div-item-center font-bold border-[1.73px] rounded-[52px] border-b_violet w-[270px] h-[73px]">
                    <div className="flex justify-center items-center">
                        <span className="text-black text-5xl relative -mt-7 mr-5">.</span>
                        <p className="text-2xl text-black block list-disk uppercase"> Volleyball</p>
                    </div>
                </li>
                <img className="w-[30px] h-[5px] " src="/public/assets/images/dash.svg" alt="" />
                <li className="text-black div-item-center font-bold border-[1.73px] rounded-[52px] border-b_pink w-[270px] h-[73px]">
                    <div className="flex justify-center items-center">
                        <span className="text-black text-5xl relative -mt-7 mr-5">.</span>
                        <p className="text-2xl text-black block list-disk uppercase"> Football</p>
                    </div>
                </li>
                <img className="w-[30px] h-[5px] " src="/public/assets/images/dash.svg" alt="" />
                <li className="text-black div-item-center font-bold border-[1.73px] rounded-[52px] border-b_orange w-[270px] h-[73px]">
                    <div className="flex justify-center items-center">
                        <span className="text-black text-5xl relative -mt-7 mr-5">.</span>
                        <p className="text-2xl text-black block list-disk uppercase"> BASKETBALL</p>
                    </div>
                </li>

                <img className="w-[30px] h-[5px] " src="/public/assets/images/dash.svg" alt="" />
                <li className="text-black div-item-center font-bold border-[1.73px] rounded-[52px] border-b_violet2 w-[270px] h-[73px]">
                    <div className="flex justify-center items-center">
                        <span className="text-black text-5xl relative -mt-7 mr-5">.</span>
                        <p className="text-2xl text-black block list-disk uppercase"> Handball</p>
                    </div>
                </li>
                <img className="w-[30px] h-[5px] " src="/public/assets/images/dash.svg" alt="" />
            </ul>
        </div>
    );
};

export default FeatureTop;