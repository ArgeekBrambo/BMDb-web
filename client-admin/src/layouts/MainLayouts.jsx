import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Sidenav from "../components/Sidenav";

const MainLayouts = () => {
    return (
        <div className="flex w-screen">
            {/* <Sidenav /> */}
            <Sidebar />
            <div className="relative w-full">
                <Outlet className="relative"/>
            </div>
        </div>
    );
};

export default MainLayouts;
