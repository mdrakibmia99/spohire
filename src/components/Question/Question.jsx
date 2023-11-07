import plusIcon from '/assets/images/plus-circle.png'

const questions=[
    "How do I contact your Customer Care Team?",
    "How can I book my Ride?",
    "What is the minimum time required to make a reservation?",
    "When do I receive my booking confirmation?",
    "When do I receive my booking confirmation?",
    "Where will my chauffeur meet me at airports?",
    "Who do we contact for the airport pickup?",
    "Why do I need to enter my flight number?",
    "What if my flight or train is delayed?",
    "What vehicles do you offer?",
    "What vehicles do you offer?"
  
]
const Question = () => {
    return (
        <div className='bg-white'>

        <div className=" lg:w-[1140px] w-[339px] mx-auto text-black lg:py-[141px] py-16">
            <p className="text-center lg:text-[62px] text-2xl font-bold ">Frequently Asked Questions</p>
             <p className="lg:text-2xl text-sm font-medium lg:mt-[83px] lg:mb-[22px] mt-12 mb-[8px]">What Are The Hours of Operation?</p>
             <p className="lg:text-xl text-[11px] font-medium max-w-[920px] lg:mb-[20px] mb-8 ">
             Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.
             </p>
            
            <div>
                {
                    questions?.map((question,index)=>( <div key={index}>
                        {index == 0 &&  <hr  className='opacity-[0.20] border-1 border-black'/>}
                        <div className='flex justify-between lg:mt-[33px] lg:mb-[27px] m-[16px]'>
                        <p className='lg:text-2xl text-[12px] font-medium'>{question}</p>
                        <img src={plusIcon} alt="" className='cursor-pointer' />
                        </div>
                        <hr  className='opacity-[0.20] border-1 border-black'/>
                     </div>

                    ))

                }
            </div>
      
        </div>
        </div>
    );
};

export default Question;