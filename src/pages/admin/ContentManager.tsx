import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { type ContentSection } from '../../data/initialContent';

const ContentManager = () => {
    const { content, updateSection, resetContent } = useContent();
    const [selectedSection, setSelectedSection] = useState<string>('aiThreatHero');
    const [formData, setFormData] = useState<ContentSection>({});
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

    useEffect(() => {
        if (content.sections[selectedSection]) {
            setFormData(content.sections[selectedSection]);
        }
    }, [selectedSection, content]);

    const handleInputChange = (key: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
        setSaveStatus('idle');
    };

    const handleSave = () => {
        setSaveStatus('saving');
        updateSection(selectedSection, formData);
        setTimeout(() => setSaveStatus('saved'), 500);
        setTimeout(() => setSaveStatus('idle'), 2000);
    };

    const handleReset = () => {
        if (window.confirm('Are you sure you want to reset all content to defaults? This cannot be undone.')) {
            resetContent();
        }
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

            <div className="grid gap-8 lg:grid-cols-4">
                {/* Sidebar: Section List */}
                <div className="lg:col-span-1">
                    <div className="rounded-lg bg-white shadow-md">
                        <div className="border-b border-gray-200 p-4">
                            <h3 className="font-semibold text-gray-700">Sections</h3>
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {Object.keys(content.sections).map((key) => (
                                <li key={key}>
                                    <button
                                        onClick={() => setSelectedSection(key)}
                                        className={`w-full px-4 py-3 text-left transition-colors ${selectedSection === key
                                            ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {key}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Main: Edit Form */}
                <div className="lg:col-span-3">
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h3 className="mb-6 text-xl font-semibold text-gray-800">
                            Editing: <span className="text-blue-600">{selectedSection}</span>
                        </h3>

                        <div className="space-y-6">
                            {Object.entries(formData).map(([key, value]) => (
                                <div key={key}>
                                    <label htmlFor={key} className="mb-2 block text-sm font-medium text-gray-700 capitalize">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </label>
                                    {value.length > 100 ? (
                                        <textarea
                                            id={key}
                                            rows={4}
                                            value={value}
                                            onChange={(e) => handleInputChange(key, e.target.value)}
                                            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            id={key}
                                            value={value}
                                            onChange={(e) => handleInputChange(key, e.target.value)}
                                            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    )}
                                </div>
                            ))}
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
