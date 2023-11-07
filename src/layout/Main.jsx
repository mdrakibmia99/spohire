import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "./Footer";


const Main = () => {
    return (
        <div className="max-w-[1980px] mx-auto bg-black">
            <Home />
            <Outlet />
            {/* <Footer/> */}

        </div>
    );
};

export default Main;