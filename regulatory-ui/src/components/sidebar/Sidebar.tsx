import {pagesConfig} from "../../config/pages.config.ts";
import './Sidebar.scss';
import SidebarLink from "./SidebarLink/SidebarLink.tsx";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="header">
                <div className="logo-header">
                    <img
                        src="/assets/Clarivate-Logo.svg"
                        alt="Clarivate Logo"
                    />
                </div>
            </div>
            {pagesConfig.map((link) => (
                <SidebarLink icon={link.icon} label={link.label} iconActive={link.iconActive} route={link.route}/>
            ))}
        </aside>
    );
}

export default Sidebar;