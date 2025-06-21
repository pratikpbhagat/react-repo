import React from "react";
import {PageProvider} from "../context/PageContext.tsx";

interface PageWrapperProps {
    pageId: string;
    pageTitle: string;
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({pageId, pageTitle, children}) => {

    return (
        <PageProvider pageId={pageId} pageTitle={pageTitle}>
            {children}
        </PageProvider>
    );
};

export default PageWrapper;