import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { type ContentSection, type GlobalSettings, type ImageAssets } from '../../data/initialContent';

type Tab = 'global' | 'images' | 'content';

const ContentManager = () => {
    const { content, updateSection, updateGlobal, updateImages, resetContent } = useContent();
    const [activeTab, setActiveTab] = useState<Tab>('global');
    const [selectedSection, setSelectedSection] = useState<string>('aiThreatHero');

    // Form states
    const [globalForm, setGlobalForm] = useState<GlobalSettings>(content.global);
    const [imagesForm, setImagesForm] = useState<ImageAssets>(content.images);
    const [sectionForm, setSectionForm] = useState<ContentSection>({});

    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

    // Sync forms with content on mount/change
    useEffect(() => {
        setGlobalForm(content.global);
        setImagesForm(content.images);
        if (content.sections[selectedSection]) {
            setSectionForm(content.sections[selectedSection]);
        }
    }, [content, selectedSection]);

    const handleGlobalChange = (key: keyof GlobalSettings, value: string) => {
        setGlobalForm(prev => ({ ...prev, [key]: value }));
        setSaveStatus('idle');
    };

    const handleImageChange = (key: string, value: string) => {
        setImagesForm(prev => ({ ...prev, [key]: value }));
        setSaveStatus('idle');
    };

    const handleSectionChange = (key: string, value: string) => {
        setSectionForm(prev => ({ ...prev, [key]: value }));
        setSaveStatus('idle');
    };

    const handleSave = () => {
        setSaveStatus('saving');

        if (activeTab === 'global') {
            updateGlobal(globalForm);
        } else if (activeTab === 'images') {
            updateImages(imagesForm);
        } else {
            updateSection(selectedSection, sectionForm);
        }

        setTimeout(() => setSaveStatus('saved'), 500);
        setTimeout(() => setSaveStatus('idle'), 2000);
    };

    const handleReset = () => {
        if (window.confirm('Are you sure you want to reset all content to defaults? This cannot be undone.')) {
            resetContent();
        }
    };

    const sectionGroups = {
        'Home Page': ['home'],
        'AI Features': ['aiThreatHero', 'featuresGrid', 'methodologies', 'adaptiveLearning', 'patternRecognition', 'dataAnalysis', 'automatedResponse', 'predictiveAnalytics', 'falsePositiveReduction'],
        'Services': ['iso27001', 'ismsp'],
        'Global Components': ['header', 'footer', 'contactForm']
    };

    const getSectionLabel = (key: string) => {
        const labels: { [key: string]: string } = {
            home: 'Home Page',
            header: 'Header / Navigation',
            footer: 'Footer',
            contactForm: 'Contact Form',
            aiThreatHero: 'AI Threat Hero',
            featuresGrid: 'Features Grid',
            methodologies: 'Methodologies',
            adaptiveLearning: 'Adaptive Learning',
            patternRecognition: 'Pattern Recognition',
            dataAnalysis: 'Data Analysis',
            automatedResponse: 'Automated Response',
            predictiveAnalytics: 'Predictive Analytics',
            falsePositiveReduction: 'False Positive Reduction',
            iso27001: 'ISO 27001',
            ismsp: 'ISMS-P'
        };
        return labels[key] || key;
    };

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">Content Manager</h2>
                <button
                    onClick={handleReset}
                    className="rounded bg-red-100 px-4 py-2 text-red-600 hover:bg-red-200"
                >
                    Reset to Defaults
                </button>
            </div>

            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    {(['global', 'images', 'content'] as Tab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium capitalize ${activeTab === tab
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                }`}
                        >
                            {tab} Settings
                        </button>
                    ))}
                </nav>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
                {/* Sidebar (Only for Content tab) */}
                {activeTab === 'content' && (
                    <div className="lg:col-span-1">
                        <div className="rounded-lg bg-white shadow-md">
                            <div className="border-b border-gray-200 p-4">
                                <h3 className="font-semibold text-gray-700">Sections</h3>
                            </div>
                            <div className="p-2">
                                {Object.entries(sectionGroups).map(([groupName, keys]) => (
                                    <div key={groupName} className="mb-4">
                                        <h4 className="mb-2 px-2 text-xs font-bold text-gray-500 uppercase tracking-wider">{groupName}</h4>
                                        <ul className="space-y-1">
                                            {keys.map((key) => (
                                                <li key={key}>
                                                    <button
                                                        onClick={() => setSelectedSection(key)}
                                                        className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${selectedSection === key
                                                            ? 'bg-blue-50 text-blue-600 font-medium'
                                                            : 'text-gray-600 hover:bg-gray-50'
                                                            }`}
                                                    >
                                                        {getSectionLabel(key)}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Edit Area */}
                <div className={activeTab === 'content' ? 'lg:col-span-3' : 'lg:col-span-4'}>
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h3 className="mb-6 text-xl font-semibold text-gray-800 capitalize">
                            Editing: <span className="text-blue-600">
                                {activeTab === 'content' ? getSectionLabel(selectedSection) : activeTab}
                            </span>
                        </h3>

                        <div className="space-y-6">
                            {/* Global Settings Form */}
                            {activeTab === 'global' && (
                                <>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">Primary Color</label>
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="color"
                                                value={globalForm.primaryColor}
                                                onChange={(e) => handleGlobalChange('primaryColor', e.target.value)}
                                                className="h-10 w-20 cursor-pointer rounded border border-gray-300 p-1"
                                            />
                                            <input
                                                type="text"
                                                value={globalForm.primaryColor}
                                                onChange={(e) => handleGlobalChange('primaryColor', e.target.value)}
                                                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">Secondary Color</label>
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="color"
                                                value={globalForm.secondaryColor}
                                                onChange={(e) => handleGlobalChange('secondaryColor', e.target.value)}
                                                className="h-10 w-20 cursor-pointer rounded border border-gray-300 p-1"
                                            />
                                            <input
                                                type="text"
                                                value={globalForm.secondaryColor}
                                                onChange={(e) => handleGlobalChange('secondaryColor', e.target.value)}
                                                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">Button Shape</label>
                                        <select
                                            value={globalForm.buttonShape}
                                            onChange={(e) => handleGlobalChange('buttonShape', e.target.value as any)}
                                            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        >
                                            <option value="rounded">Rounded (Default)</option>
                                            <option value="pill">Pill (Full Round)</option>
                                            <option value="square">Square</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            {/* Images Form */}
                            {activeTab === 'images' && (
                                <>
                                    {Object.entries(imagesForm).map(([key, value]) => (
                                        <div key={key} className="border-b border-gray-100 pb-6 last:border-0">
                                            <label className="mb-2 block text-sm font-medium text-gray-700 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </label>

                                            <div className="space-y-3">
                                                {/* URL Input */}
                                                <div>
                                                    <span className="mb-1 block text-xs text-gray-500">Image URL</span>
                                                    <input
                                                        type="text"
                                                        value={value}
                                                        onChange={(e) => handleImageChange(key, e.target.value)}
                                                        placeholder="https://example.com/image.jpg"
                                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                    />
                                                </div>

                                                {/* File Upload */}
                                                <div>
                                                    <span className="mb-1 block text-xs text-gray-500">Or Upload from PC</span>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                // Check file size (limit to 500KB to prevent localStorage quota exceeded)
                                                                if (file.size > 500 * 1024) {
                                                                    alert('File size too large! Please upload an image smaller than 500KB to save in local storage.');
                                                                    return;
                                                                }

                                                                const reader = new FileReader();
                                                                reader.onloadend = () => {
                                                                    handleImageChange(key, reader.result as string);
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                        }}
                                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                                    />
                                                </div>

                                                {/* Preview */}
                                                {value && (
                                                    <div className="mt-2">
                                                        <p className="text-xs text-gray-500 mb-1">Preview:</p>
                                                        <img src={value} alt={key} className="h-32 object-contain rounded border border-gray-200 bg-gray-50" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="rounded-md bg-blue-50 p-4 mt-6">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="text-sm font-medium text-blue-800">Image Upload Info</h3>
                                                <div className="mt-2 text-sm text-blue-700">
                                                    <p>
                                                        You can enter an image URL or upload a file from your PC.
                                                        Uploaded files are saved locally in your browser.
                                                        <strong>Note:</strong> Large files may exceed storage limits (max 500KB recommended).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Section Content Form */}
                            {activeTab === 'content' && (
                                <>
                                    {Object.entries(sectionForm).map(([key, value]) => (
                                        <div key={key}>
                                            <label htmlFor={key} className="mb-2 block text-sm font-medium text-gray-700 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </label>
                                            {value.length > 100 ? (
                                                <textarea
                                                    id={key}
                                                    rows={4}
                                                    value={value}
                                                    onChange={(e) => handleSectionChange(key, e.target.value)}
                                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    id={key}
                                                    value={value}
                                                    onChange={(e) => handleSectionChange(key, e.target.value)}
                                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>

                        <div className="mt-8 flex items-center justify-end gap-4">
                            {saveStatus === 'saved' && (
                                <span className="text-green-600 font-medium">Saved successfully!</span>
                            )}
                            <button
                                onClick={handleSave}
                                disabled={saveStatus === 'saving'}
                                className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"
                            >
                                {saveStatus === 'saving' ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentManager;
