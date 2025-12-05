import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactModal from '@/components/ContactModal';
import { useContent } from '@/context/ContentContext';

const ISO27001 = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const { content } = useContent();
    const {
        title, subtitle, overviewTitle, overviewText1, overviewText2,
        principlesTitle, principle1Title, principle1Desc, principle2Title, principle2Desc, principle3Title, principle3Desc,
        backgroundTitle, backgroundList,
        necessityTitle, necessity1Title, necessity1List, necessity2Title, necessity2List,
        effectsTitle, effect1Title, effect1Desc, effect2Title, effect2Desc, effect3Title, effect3Desc, effect4Title, effect4Desc, effect5Title, effect5Desc, effect6Title, effect6Desc,
        consultingTitle, consultingStep1Title, consultingStep1Desc, consultingStep2Title, consultingStep2Desc, consultingStep3Title, consultingStep3Desc, consultingStep4Title, consultingStep4Desc
    } = content.sections.iso27001;

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section */}
            <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMmQzZCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        홈으로 돌아가기
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-start gap-6"
                    >
                        <div className="text-6xl">🔒</div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                {subtitle}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    {/* 개요 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">{overviewTitle}</h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                {overviewText1}
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {overviewText2}
                            </p>
                        </div>
                    </motion.div>

                    {/* 핵심 원칙 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">{principlesTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/30">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                                        🔐
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{principle1Title}</h3>
                                        <p className="text-gray-300">
                                            {principle1Desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/30">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{principle2Title}</h3>
                                        <p className="text-gray-300">
                                            {principle2Desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/30">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                                        ⚡
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{principle3Title}</h3>
                                        <p className="text-gray-300">
                                            {principle3Desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 도입 배경 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">{backgroundTitle}</h2>
                        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                            <ul className="space-y-4">
                                {backgroundList.split('|').map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">▸</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* 도입 필요성 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">{necessityTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-red-400">⚠️</span>
                                    {necessity1Title}
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    {necessity1List.split('|').map((item: string, index: number) => (
                                        <li key={index}>• {item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-yellow-400">📊</span>
                                    {necessity2Title}
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    {necessity2List.split('|').map((item: string, index: number) => (
                                        <li key={index}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* 도입 효과 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">{effectsTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '🎯', title: effect1Title, desc: effect1Desc },
                                { icon: '🏆', title: effect2Title, desc: effect2Desc },
                                { icon: '🛡️', title: effect3Title, desc: effect3Desc },
                                { icon: '📈', title: effect4Title, desc: effect4Desc },
                                { icon: '💼', title: effect5Title, desc: effect5Desc },
                                { icon: '🌐', title: effect6Title, desc: effect6Desc },
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* AISEURE 컨설팅 서비스 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">{consultingTitle}</h2>
                        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-8 border border-blue-500/30">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{consultingStep1Title}</h4>
                                        <p className="text-gray-300">
                                            {consultingStep1Desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{consultingStep2Title}</h4>
                                        <p className="text-gray-300">
                                            {consultingStep2Desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{consultingStep3Title}</h4>
                                        <p className="text-gray-300">
                                            {consultingStep3Desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{consultingStep4Title}</h4>
                                        <p className="text-gray-300">
                                            {consultingStep4Desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">ISO 27001 인증에 관심이 있으신가요?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        AISEURE의 전문가와 상담하여 귀사에 최적화된 인증 전략을 수립하세요.
                    </p>
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl"
                    >
                        무료 상담 신청하기
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </section>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    );
};

export default ISO27001;
