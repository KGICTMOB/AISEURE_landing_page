import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { initialContent, type ContentData, type ContentSection, type GlobalSettings, type ImageAssets } from '../data/initialContent';

interface ContentContextType {
    content: ContentData;
    updateSection: (sectionKey: string, newData: ContentSection) => void;
    updateGlobal: (newData: GlobalSettings) => void;
    updateImages: (newData: ImageAssets) => void;
    resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
    const [content, setContent] = useState<ContentData>(initialContent);

    useEffect(() => {
        const storedContent = localStorage.getItem('siteContent');
        if (storedContent) {
            try {
                const parsed = JSON.parse(storedContent);
                // Merge with initialContent to ensure new fields exist if local storage is old
                setContent({ ...initialContent, ...parsed });
            } catch (error) {
                console.error('Failed to parse stored content:', error);
            }
        }
    }, []);

    const saveToStorage = (newContent: ContentData) => {
        localStorage.setItem('siteContent', JSON.stringify(newContent));
    };

    const updateSection = (sectionKey: string, newData: ContentSection) => {
        setContent((prevContent) => {
            const updatedContent = {
                ...prevContent,
                sections: {
                    ...prevContent.sections,
                    [sectionKey]: newData,
                },
            };
            saveToStorage(updatedContent);
            return updatedContent;
        });
    };

    const updateGlobal = (newData: GlobalSettings) => {
        setContent((prevContent) => {
            const updatedContent = {
                ...prevContent,
                global: newData,
            };
            saveToStorage(updatedContent);
            return updatedContent;
        });
    };

    const updateImages = (newData: ImageAssets) => {
        setContent((prevContent) => {
            const updatedContent = {
                ...prevContent,
                images: newData,
            };
            saveToStorage(updatedContent);
            return updatedContent;
        });
    };

    const resetContent = () => {
        setContent(initialContent);
        localStorage.removeItem('siteContent');
    };

    return (
        <ContentContext.Provider value={{ content, updateSection, updateGlobal, updateImages, resetContent }}>
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
