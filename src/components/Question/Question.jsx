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

        <div className=" max-w-[1140px] mx-auto text-black py-[141px]">
            <p className="text-center text-[62px] font-bold ">Frequently Asked Questions</p>
             <p className="text-2xl font-medium mt-[83px] mb-[22px]">What Are The Hours of Operation?</p>
             <p className="text-xl font-medium max-w-[920px] mb-[20px]">
             Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.
             </p>
            
            <div>
                {
                    questions?.map((question,index)=>( <div key={index}>
                        {index == 0 &&  <hr  className='opacity-[0.20] border-1 border-black'/>}
                        <div className='flex justify-between mt-[33px] mb-[27px]'>
                        <p className='text-2xl font-medium'>{question}</p>
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