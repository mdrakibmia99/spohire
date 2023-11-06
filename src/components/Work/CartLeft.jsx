
const CartLeft = () => {
    return (
        <div>
        <div>
            <div className="bg-white rounded-[20px] w-[687px] h-[201px] flex py-[26.61px] px-[39.92px] pr-[53.22px]">
                <div>

                <p className="text-[31.95px] text-black font-bold w-[283px] mb-[7.46px]">Local News, Teams  & Players</p>
                <div className="div-item-center bg-[#F5F3FA] w-[190px] h-[49px] rounded-[6.65px]">
                 <button>Allow Location</button> 
                </div>
                </div>
                 
                 <div className="flex justify-center items-center">
                    <div className="w-[156px] h-[78.5px]">

                    <img  src="/assets/work/before-circle.png" alt="" />
                    </div>
                    <div className="w-[145px] h-[145px] ml-[19px]"> 

                    <img className="w-full object-fill  h-full"  src="/assets/work/circle-second.png" alt="" />
                    </div>
                    
                 </div>
            </div>

            {/* second cart  */}
            <div className="bg-white rounded-[20px] w-[687px] h-[201px] flex py-[26.61px] px-[39.92px] pr-[53.22px] mt-[34px] mb-[26px]">
               <div>
                <p className="text-[23.95px] font-bold whitespace-nowrap">Robert Lewandowski</p>
                <div>
                    <img className="my-[18px]" src="/assets/work/second-img.png" alt="" />
                    <img src="/assets/work/second-img-2.png" alt="" />
                </div>
               </div>
               <div className="flex items-center">
                <img className="w-[156px] h-[78px] ml-[18px] mr-[11px]" src="/assets/work/second-curve.png" alt="" />
                <img src="/assets/work/secon-age.png" alt="" />
               </div>
               <img className="w-[90px] h-[40px] ml-[24px]" src="/assets/work/btn.png" alt="" />
            </div>

            {/* third cart  */}
            <div className="bg-[#2D5BFF] rounded-[20px] w-[687px] h-[255px] flex justify-between py-[26.61px] px-[39.92px] pr-[53.22px]">
             <div className="flex flex-col gap-[36px] justify-center">

              <div className="flex items-center gap-[18.63px] text-white">
                <div>
                    <img src="/assets/work/number-3.png" alt="" />
                </div>
                <div className="flex flex-col">
                    <p className="text-[26.61px] font-bold">Connect With Us</p>
                    <p className="text-[21.29px] text-[#F5F3FA]">Wait for contact with your new team.</p>
                </div>
              </div>
              <div className="flex items-center gap-[18.63px] text-white">
                <div>
                    <img src="/assets/work/number-3.png" alt="" />
                </div>
                <div className="flex flex-col">
                    <p className="text-[26.61px] font-bold">Connect With Us</p>
                    <p className="text-[21.29px] text-[#F5F3FA]">Wait for contact with your new team.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-5 h-[50px] ">
                <p className="text-[21.29px] text-white">Filter</p>
                <img className="w-[25px] h-[25px]" src="/assets/work/ion_filter.png" alt="" />
            </div>
             </div>

        </div>
        <div></div>
    </div>
    );
};

export default CartLeft;