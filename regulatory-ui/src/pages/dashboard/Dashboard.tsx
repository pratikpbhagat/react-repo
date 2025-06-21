import "./Dashboard.scss";
import SearchInput from "../../components/core/search-input/SearchInput.tsx";
import Widgets from "../../components/core/widgets/Widgets.tsx";

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-header">
                <div className="top-row">
                    <div className="greeting">
                        <h2>Hello, Firstname!</h2>
                        <h3 className="highlight">How can I help you today?</h3>
                    </div>

                    <div className="search-wrapper">
                        <SearchInput/>
                        <div className="customize-layout">
                            <button type="button">
                            <span className="customize-layout-icon">
                              <img src="/assets/icons/dashboard_customize.svg" alt="Customize icon"/>
                            </span>
                                Customise layout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Widgets/>
        </>
    );
}

export default Dashboard;