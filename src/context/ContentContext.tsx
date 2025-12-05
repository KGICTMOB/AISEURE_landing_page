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

    // Helper function for deep merging
    const deepMerge = (target: any, source: any) => {
        for (const key in source) {
            if (source[key] instanceof Object && key in target) {
                Object.assign(source[key], deepMerge(target[key], source[key]));
            }
        }
        Object.assign(target || {}, source);
        return target;
    };

    useEffect(() => {
        const storedContent = localStorage.getItem('siteContent');
        if (storedContent) {
            try {
                const parsed = JSON.parse(storedContent);
                // Deep merge: Start with initialContent, then overlay parsed content
                // We create a deep copy of initialContent first to avoid mutating it
                const mergedContent = JSON.parse(JSON.stringify(initialContent));

                // We need to carefully merge. We want to keep initialContent structure
                // but overwrite values from parsed if they exist.
                // However, if parsed is missing a section (like 'header'), we want to keep it from initialContent.

                // Simple approach: Iterate over parsed sections and update mergedContent
                if (parsed.global) mergedContent.global = { ...mergedContent.global, ...parsed.global };
                if (parsed.images) mergedContent.images = { ...mergedContent.images, ...parsed.images };

                if (parsed.sections) {
                    Object.keys(parsed.sections).forEach(sectionKey => {
                        if (mergedContent.sections[sectionKey]) {
                            mergedContent.sections[sectionKey] = {
                                ...mergedContent.sections[sectionKey],
                                ...parsed.sections[sectionKey]
                            };
                        } else {
                            // If user has a section that is no longer in initialContent (deprecated), maybe keep it or ignore?
                            // Let's keep it for safety, or ignore it.
                            // But more importantly, if initialContent has a section that parsed DOESN'T, it is already in mergedContent.
                        }
                    });
                }

                setContent(mergedContent);
            } catch (error) {
                console.error('Failed to parse stored content:', error);
                setContent(initialContent);
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
