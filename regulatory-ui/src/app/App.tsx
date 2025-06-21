import {useAuth} from "../hooks/auth/useAuth.ts";
import HomePage from "../pages/homepage/HomePage.tsx";

function App() {

    const {user, loading} = useAuth();

    if (loading) return <div>Loading...</div>;
    if (!user) return null;
    return (
        <>
            <div className="App">
                <HomePage/>
            </div>
        </>
    )
}

export default App
