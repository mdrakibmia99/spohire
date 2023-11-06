import { Outlet } from "react-router-dom";
import Home from "../pages/Home";


const Main = () => {
    return (
        <div className="max-w-[1980px] mx-auto bg-black">
            <Home />
            <Outlet />

        </div>
    );
};

export default Main;