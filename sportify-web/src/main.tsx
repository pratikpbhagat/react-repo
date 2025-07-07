import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from "./app/App.tsx";
import {BrowserRouter} from "react-router-dom";
import "./styles/global.scss";
import "./index.css";

/**
 * * Main entry point for the React application.
 */
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
)
