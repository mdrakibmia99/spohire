import CartLeft from "./CartLeft";
import CartRight from "./CartRight";

const WorkCartBody = () => {
    return (<div className="flex justify-center items-center gap-x-[39px] pb-[215px]">
        <CartLeft />
        <CartRight />
    </div>

    );
};

export default WorkCartBody;