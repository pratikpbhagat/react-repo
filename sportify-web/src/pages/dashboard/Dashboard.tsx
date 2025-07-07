import "./Dashboard.scss"
import UpcomingBookingsSection from "../../features/dashboard/upcoming-bookings-section/UpcomingBookingsSection.tsx";
import BookYourSlot from "@/features/dashboard/book-slot/BookYourSlot.tsx";

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-header">
                <div className="row">
                    <div className="greeting">
                        <h2>Hello, Firstname!</h2>
                    </div>
                </div>
            </div>
            <UpcomingBookingsSection/>
            <BookYourSlot/>
        </>
    );
}

export default Dashboard;