import Sidebar from "../../components/sidebar/Sidebar.tsx";
import Header from "../../components/header/Header.tsx";
import "./HomePage.scss";
import AppRoutes from "../../app/routes.tsx";

const HomePage = () => {
    return (
        <div className="homepage">
            <Sidebar/>

            <div className="main">
                <Header/>
                <div className="content">
                    <AppRoutes/>
                </div>
            </div>
        </div>
    );
}
export default HomePage;