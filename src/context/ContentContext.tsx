import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { initialContent, type ContentData, type ContentSection } from '../data/initialContent';

interface ContentContextType {
    content: ContentData;
    updateSection: (sectionKey: string, newData: ContentSection) => void;
    resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
    const [content, setContent] = useState<ContentData>(initialContent);

    useEffect(() => {
        const storedContent = localStorage.getItem('siteContent');
        if (storedContent) {
            try {
                setContent(JSON.parse(storedContent));
            } catch (error) {
                console.error('Failed to parse stored content:', error);
            }
        }
    }, []);

    const updateSection = (sectionKey: string, newData: ContentSection) => {
        setContent((prevContent) => {
            const updatedContent = {
                ...prevContent,
                sections: {
                    ...prevContent.sections,
                    [sectionKey]: newData,
                },
            };
            localStorage.setItem('siteContent', JSON.stringify(updatedContent));
            return updatedContent;
        });
    };

    const resetContent = () => {
        setContent(initialContent);
        localStorage.removeItem('siteContent');
    };

    return (
        <ContentContext.Provider value={{ content, updateSection, resetContent }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
