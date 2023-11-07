
const CartLeft = () => {
    return (
        <div className="w-full">

            <div className="bg-white rounded-[20px] lg:w-[687px]  lg:h-[201px]  w-[366px] h-[106px] flex lg:py-[26.61px] lg:px-[39.92px] lg:pr-[53.22px] pt-[14px] pl-[21px] pb-[13px] pr-[30px]">
                <div>

                <p className="lg:text-[31.95px] text-[16px] text-black font-bold lg:w-[283px] w-[151px] mb-[7.46px]">Local News, Teams  & Players</p>
                <div className="div-item-center bg-[#F5F3FA] lg:w-[190px] lg:h-[49px] w-[100px]  h-[25px] rounded-[6.65px]">
                 <button className="text-[11.41px] lg:text-[21.29px]">Allow Location</button> 
                </div>
                </div>
                 
                 <div className="flex justify-center items-center">
                    <div className="lg:w-[156px] lg:h-[78.5px] w-[82px] h-[41px]">

                    <img  src="/assets/work/before-circle.png" alt="" />
                    </div>
                    <div className="lg:w-[145px] lg:h-[145px] lg:ml-[19px] w-[72px] h-[72px] ml-[13px]"> 

                    <img className="w-full object-fill  h-full"  src="/assets/work/circle-second.png" alt="" />
                    </div>
                    
                 </div>
            </div>

            {/* second cart  */}
            <div className="bg-white rounded-[20px] lg:w-[687px]  lg:h-[201px]  w-[366px] h-[106px]  flex lg:py-[26.61px] lg:px-[39.92px] lg:pr-[53.22px] lg:mt-[34px] mt-[20px] mb-[15px] lg:mb-[26px] pt-[14px] pl-[21px] ">
               <div>
                <p className="lg:text-[23.95px] text-[12px] font-bold whitespace-nowrap">Robert Lewandowski</p>
                <div>
                    <img className="lg:my-[18px] my-[11px] w-[123px] h-[15px] lg:w-[232px] lg:h-[29px]" src="/assets/work/second-img.png" alt="" />
                    <img className="w-[123px] h-[15px] lg:w-[232px] lg:h-[29px]" src="/assets/work/second-img-2.png" alt="" />
                </div>
               </div>
               <div className="flex items-center">
                <img className="lg:w-[156px] lg:h-[78px] w-[83px] h-[41px] ml-[18px] mr-[11px]" src="/assets/work/second-curve.png" alt="" />
                <img className="w-[39px] h-[65px] ml-[7px] " src="/assets/work/secon-age.png" alt="" />
               </div >
               <img className="lg:w-[90px] lg:h-[40px] w-[47px] h-[20px]  lg:ml-[24px] " src="/assets/work/btn.png" alt="" />
            </div>

            {/* third cart  */}
            <div className="bg-[#2D5BFF] rounded-[20px] lg:w-[687px] lg:h-[255px] w-[366px] h-[136px] flex justify-between lg:py-[26.61px] py-[20px] lg:pl-[39.92px] pl-[33px] lg:pr-[53.22px] pr-[21px]">
             <div className="flex flex-col lg:gap-[36px] gap-[6px] justify-center">

              <div className="flex items-center gap-[18.63px] text-white">
                <div className="w-[33px] h-[33px] lg:w-[62px] lg:h-[62px]">
                    <img className="h-full w-full" src="/assets/work/number-3.png" alt="" />
                </div>
                <div className="flex flex-col">
                    <p className="lg:text-[26.61px] text-[14.26px] font-bold">Connect With Us</p>
                    <p className="lg:text-[21.29px] text-[11.41px] text-[#F5F3FA]">Wait for contact with your new team.</p>
                </div>
              </div>
              <div className="flex items-center gap-[18.63px] text-white">
                <div className="w-[33px] h-[33px] lg:w-[62px] lg:h-[62px]">
                    <img className="h-full w-full" src="/assets/work/number-4.png" alt="" />
                </div>
                <div className="flex flex-col">
                    <p className="lg:text-[26.61px] text-[14.26px] font-bold">Connect With Us</p>
                    <p className="lg:text-[21.29px] text-[11.41px]  text-[#F5F3FA]">Wait for contact with your new team.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-5 lg:h-[50px] h-[13px]">
                <p className="lg:text-[21.29px] text-[11.38px] text-white ">Filter</p>
                <img className="lg:w-[25px] lg:h-[25px] w-[13px] h-[13px]" src="/assets/work/ion_filter.png" alt="" />
            </div>
             </div>

    </div>
    );
};

export default CartLeft;