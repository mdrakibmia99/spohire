import Features from "../components/Feature/Features";
import HeroSection from "../components/HeroSection";
import Work from "../components/Work/Work";
import Navbar from "../layout/Navbar";

const Home = () => {
    return (<div>
        <div className="w-full bg-[url('/assets/images/star.png')] bg-no-repeat relative" >
            <Navbar />
            <HeroSection />
        </div>
        <Features />
        <Work/>

    </div>
    );
};

export default Home;