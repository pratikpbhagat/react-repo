import React, {createContext, useContext} from 'react';

interface PageContextType {
    pageId: string;
    pageTitle: string;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePageContext = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error("usePageContext must be used within a PageProvider");
    }
    return context;
};

export const PageProvider: React.FC<{ pageId: string; pageTitle: string; children: React.ReactNode }> = ({
                                                                                                             pageId,
                                                                                                             pageTitle,
                                                                                                             children,
                                                                                                         }) => {
    return (
        <PageContext.Provider value={{pageId, pageTitle}}>
            {children}
        </PageContext.Provider>
    );
};
