import {Link} from "react-router-dom";
import "./Header.scss"

const Header = () => {
    return (
        <div className="header-container">
            <div className="left-info">
                <div className="count">3</div>
                <div className="label">
                    New items since<br/>last log in
                </div>
            </div>

            <div className="divider"/>

            <div className="center-info">
                <div>Last log in:</div>
                <div className="login-time">8 May 2025 07:46 AM</div>
            </div>

            <div className="divider"/>

            <div className="right-info">
                <Link to="/dashboard">
          <span className="icon">
            <img src="/assets/icons/chat_bubble_outline.svg" alt="Messages"/>
          </span>
                </Link>

                <Link to="/dashboard">
          <span className="icon">
            <img src="/assets/icons/bell-icon.svg" alt="Notifications"/>
          </span>
                </Link>

                <Link to="/dashboard">
          <span className="icon">
            <img src="/assets/icons/settings.svg" alt="Settings"/>
          </span>
                </Link>

                <div className="avatar-wrapper">
                    <img src="/assets/icons/user_avatar.svg" alt="User Avatar"/>
                    <img src="/assets/icons/down-arrow.svg" alt="Dropdown Arrow"/>
                </div>
            </div>
        </div>
    );
}

export default Header;