import { Outlet } from "react-router-dom"
import "./index.scss";
import Sidebar from "../Sidebar";

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <div className="tags top-tags">
                    <span>&lt;html&gt;</span>
                    <span className="bodyTop">&lt;body&gt;</span>
                </div>
                <Outlet />
                <div className="tags bottom-tags">
                    <span className="bodyBot">&lt;/body&gt;</span>
                    <span>&lt;/html&gt;</span>
                </div>
            </div>
        </div>
    );
};


export default Layout