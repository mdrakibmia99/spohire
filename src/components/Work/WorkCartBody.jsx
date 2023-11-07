import CartLeft from "./CartLeft";
import CartRight from "./CartRight";

const WorkCartBody = () => {
    return (<div className="flex flex-col lg:flex-row justify-center items-center gap-x-[39px] pb-[215px] overflow-hidden">
        <div>
            <CartLeft />
        </div>
        <CartRight />
    </div>

    );
};

export default WorkCartBody;