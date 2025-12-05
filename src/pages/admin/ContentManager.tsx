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
                                        <div key={key}>
                                            <label className="mb-2 block text-sm font-medium text-gray-700 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').trim()} URL
                                            </label>
                                            <input
                                                type="text"
                                                value={value}
                                                onChange={(e) => handleImageChange(key, e.target.value)}
                                                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            />
                                            {value && (
                                                <div className="mt-2">
                                                    <p className="text-xs text-gray-500 mb-1">Preview:</p>
                                                    <img src={value} alt={key} className="h-20 object-contain rounded border border-gray-200 bg-gray-50" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div className="rounded-md bg-yellow-50 p-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="text-sm font-medium text-yellow-800">Image Upload Note</h3>
                                                <div className="mt-2 text-sm text-yellow-700">
                                                    <p>
                                                        Currently, this admin panel only supports image URLs. To change images, please upload your image to a hosting service (like Imgur, AWS S3, or Vercel Blob) and paste the URL here.
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
