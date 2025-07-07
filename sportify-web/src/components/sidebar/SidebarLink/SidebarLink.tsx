import {NavLink} from "react-router-dom";
import React from "react";
import "./SidebarLink.scss";

interface SidebarLinkProps {
    route: string;
    icon: string;
    iconActive: string;
    label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({route, icon, iconActive, label}) => {
    return (
        <NavLink
            key={route}
            to={route}
            className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}
        >
            {({isActive}) => (
                <>
                    <span className="icon">
                <img src={isActive ? iconActive : icon} alt={label}/>
              </span>
                    {label}
                </>
            )}
        </NavLink>
    );
}

export default SidebarLink;