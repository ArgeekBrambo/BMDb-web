import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Sidenav from "../components/Sidenav";

const MainLayouts = () => {
    return (
        <div className="flex">
            {/* <Sidenav /> */}
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default MainLayouts;
