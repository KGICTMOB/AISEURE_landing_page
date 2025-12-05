import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import ContactModal from '@/components/ContactModal';
import { useContent } from '@/context/ContentContext';

const Header = () => {
    const [isAIFeaturesOpen, setIsAIFeaturesOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const { content } = useContent();
    const {
        aiFeaturesLabel, servicesLabel, aboutLabel, contactButtonText,
        aiFeature1, aiFeature2, aiFeature3, aiFeature4, aiFeature5, aiFeature6,
        service1, service2, service3
    } = content.sections.header;

    const aiFeatures = [
        { id: 'adaptive-learning', title: aiFeature1, icon: '🧠' },
        { id: 'pattern-recognition', title: aiFeature2, icon: '🔍' },
        { id: 'data-analysis', title: aiFeature3, icon: '📊' },
        { id: 'automated-response', title: aiFeature4, icon: '⚡' },
        { id: 'predictive-analytics', title: aiFeature5, icon: '🔮' },
        { id: 'false-positive-reduction', title: aiFeature6, icon: '✓' },
    ];

    const services = [
        { id: 'iso27001', title: service1, path: '/consulting/iso27001' },
        { id: 'isms-p', title: service2, path: '/consulting/isms-p' },
        { id: 'it-audit', title: service3, path: '#' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/80 px-6 py-4 backdrop-blur-md md:px-12">
                <Link to="/" className="flex items-center space-x-3">
                    <img src={logo} alt="AISEURE Logo" className="h-10 w-10 object-contain" />
                    <div className="text-2xl font-bold text-white tracking-wider">AISEURE</div>
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-8 text-white">
                        {/* AI 기능 Dropdown */}
                        <li
                            className="relative cursor-pointer"
                            onMouseEnter={() => setIsAIFeaturesOpen(true)}
                            onMouseLeave={() => setIsAIFeaturesOpen(false)}
                        >
                            <div className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                                {aiFeaturesLabel}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                                </svg>
                            </div>

                            {/* Dropdown Menu */}
                            {isAIFeaturesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2">
                                    {aiFeatures.map((feature) => (
                                        <Link
                                            key={feature.id}
                                            to={`/ai-threat-detection/${feature.id}`}
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors"
                                        >
                                            <span className="text-2xl">{feature.icon}</span>
                                            <span className="text-white hover:text-cyan-400">{feature.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>

                        {/* 서비스 Dropdown */}
                        <li
                            className="relative cursor-pointer"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <div className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                                {servicesLabel}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                                </svg>
                            </div>

                            {/* Dropdown Menu */}
                            {isServicesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2">
                                    {services.map((service) => (
                                        <Link
                                            key={service.id}
                                            to={service.path}
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors"
                                        >
                                            <span className="text-white hover:text-cyan-400">{service.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li className="cursor-pointer hover:text-cyan-400 transition-colors">
                            <a href="https://blog.naver.com/kjhkjh10114" target="_blank" rel="noopener noreferrer">{aboutLabel}</a>
                        </li>
                        <li>
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                            >
                                {contactButtonText}
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};

const Footer = () => {
    const { content } = useContent();
    const {
        companyName, companyDesc, aiFeaturesLabel, servicesLabel, companyLabel,
        aboutLabel, careersLabel, contactLabel, copyright,
        aiFeature1, aiFeature2, aiFeature3, aiFeature4, aiFeature5, aiFeature6,
        service1, service2, service3
    } = { ...content.sections.footer, ...content.sections.header }; // Merge header content for consistent labels if needed, or just use footer content

    return (
        <footer className="bg-gray-900 py-12 text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <h3 className="mb-4 text-xl font-bold">{companyName}</h3>
                        <p className="text-gray-400">{companyDesc}</p>
                    </div>

                    {/* AI Features */}
                    <div>
                        <h4 className="mb-4 font-semibold text-cyan-400">{aiFeaturesLabel}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/ai-threat-detection/adaptive-learning" className="hover:text-cyan-400 transition-colors">{aiFeature1}</Link></li>
                            <li><Link to="/ai-threat-detection/pattern-recognition" className="hover:text-cyan-400 transition-colors">{aiFeature2}</Link></li>
                            <li><Link to="/ai-threat-detection/data-analysis" className="hover:text-cyan-400 transition-colors">{aiFeature3}</Link></li>
                            <li><Link to="/ai-threat-detection/automated-response" className="hover:text-cyan-400 transition-colors">{aiFeature4}</Link></li>
                            <li><Link to="/ai-threat-detection/predictive-analytics" className="hover:text-cyan-400 transition-colors">{aiFeature5}</Link></li>
                            <li><Link to="/ai-threat-detection/false-positive-reduction" className="hover:text-cyan-400 transition-colors">{aiFeature6}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 font-semibold text-cyan-400">{servicesLabel}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/consulting/iso27001" className="hover:text-cyan-400 transition-colors">{service1}</Link></li>
                            <li><Link to="/consulting/isms-p" className="hover:text-cyan-400 transition-colors">{service2}</Link></li>
                            <li className="hover:text-cyan-400 transition-colors cursor-pointer">{service3}</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="mb-4 font-semibold text-cyan-400">{companyLabel}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="https://blog.naver.com/kjhkjh10114" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">{aboutLabel}</a></li>
                            <li className="hover:text-cyan-400 transition-colors cursor-pointer">{careersLabel}</li>
                            <li className="hover:text-cyan-400 transition-colors cursor-pointer">{contactLabel}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
                    {copyright}
                </div>
            </div>
        </footer>
    );
};

const MainLayout = () => {
    const { content } = useContent();
    const { primaryColor, secondaryColor } = content.global;

    return (
        <div
            className="flex min-h-screen flex-col bg-black text-white"
            style={{
                '--primary-color': primaryColor,
                '--secondary-color': secondaryColor,
            } as React.CSSProperties}
        >
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
