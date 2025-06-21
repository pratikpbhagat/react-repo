import {Navigate, Route, Routes} from 'react-router-dom';
import {pagesConfig} from "../config/pages.config.ts";
import PageWrapper from "../pages/PageWrapper.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard"/>}/>
            {pagesConfig.map((page) => (
                <Route
                    key={page.route}
                    path={page.route}
                    element={
                        <PageWrapper pageId={page.pageId} pageTitle={page.pageTitle}>
                            <page.component/>
                            {page.dynamicComponents && page.dynamicComponents.length > 0 && (
                                <>
                                    {page.dynamicComponents.map((Component, index) => (
                                        <Component key={index}/>
                                    ))}
                                </>
                            )}
                        </PageWrapper>
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRoutes;