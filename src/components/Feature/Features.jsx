import FeatureCart from "./FeatureCart";
import FeatureTitle from "./FeatureTitle";
import FeatureTop from "./FeatureTop";

const Features = () => {
    return (<div className="bg-white ">
        <FeatureTop />
        <div className="max-w-[1720px] mx-auto mt-[134px] pb-[139px]">
         <FeatureTitle/>
         <FeatureCart/>
        </div>
    </div>
    );
};

export default Features;