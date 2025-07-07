import React from "react";
import {PageProvider} from "../context/PageContext.tsx";

interface PageWrapperProps {
    pageId: string;
    pageTitle: string;
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({pageId, pageTitle, children}) => {

    return (
        <div style={{padding: "24px 0 0 0px"}}>
            <PageProvider pageId={pageId} pageTitle={pageTitle}>
                {children}
            </PageProvider>
        </div>
    );
};

export default PageWrapper;