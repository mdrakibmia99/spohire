import Features from "../components/Feature/Features";
import HeroSection from "../components/HeroSection";
import Question from "../components/Question/Question";
import SpoHire from "../components/SpoHire/SpoHire";
import Testimonal from "../components/Testimonal/Testimonal";
import Work from "../components/Work/Work";
import Navbar from "../layout/Navbar";

const Home = () => {
    return (<div>
        <div className="w-full bg-[url('/assets/images/star.png')] bg-no-repeat relative" >
            <Navbar />
            <HeroSection />
            <div className="absolute top-0 right-0 ">
                <img src="assets/images/home-tr.png" alt="" />
            </div>
        </div>
        
        <Features />
        <Work />
        {/*
        
        <Testimonal />
        <SpoHire />
        <Question /> */}

    </div>
    );
};

export default Home;