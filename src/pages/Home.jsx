import Features from "../components/Feature/Features";
import HeroSection from "../components/HeroSection";
import Question from "../components/Question/Question";
import SpoHire from "../components/SpoHire/SpoHire";
import Testimonal from "../components/Testimonal/Testimonal";
import Work from "../components/Work/Work";
import Navbar from "../layout/Navbar";

const Home = () => {
    return (<div className="w-full overflow-hidden">
        <div className="w-full bg-[url('/assets/images/star.png')] bg-no-repeat relative z-40 overflow-hidden" >
            <Navbar />
            <HeroSection />
            <div className="absolute top-0 right-0 -z-10">
                <img src="assets/images/home-tr.png" alt="" />
            </div>
        </div>
        
        <Features />
        <Work />
        <Testimonal />
        <SpoHire />
        <Question />

    </div>
    );
};

export default Home;