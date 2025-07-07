import React, {createContext} from 'react';

interface PageContextType {
    pageId: string;
    pageTitle: string;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

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
