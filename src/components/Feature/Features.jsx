import FeatureCart from "./FeatureCart";
import FeatureTitle from "./FeatureTitle";
import FeatureTop from "./FeatureTop";

const Features = () => {
    return (<div className="bg-white ">
        <FeatureTop />
        <div className="max-w-[1720px] mx-auto lg:mt-[134px] mt-12  pb-[139px]">
         <FeatureTitle/>
         <FeatureCart/>
        </div>
    </div>
    );
};

export default Features;