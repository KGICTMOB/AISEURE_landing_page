import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface DetailLayoutProps {
    title: string;
    description: string;
    gradient: string;
    icon: string;
    children: ReactNode;
    relatedFeatures: Array<{
        id: string;
        title: string;
        icon: string;
    }>;
}

const DetailLayout = ({ title, description, gradient, icon, children, relatedFeatures }: DetailLayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Sub-Hero Section */}
            <section className={`relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br ${gradient} overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMmQzZCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <Link
                        to="/ai-threat-detection"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        AI 위협 탐지로 돌아가기
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-start gap-6"
                    >
                        <div className="text-6xl">{icon}</div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
                            <p className="text-xl text-white/90 leading-relaxed">{description}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="relative py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </section>

            {/* Related Features Section */}
            <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-gray-800/50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8">관련 기능</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedFeatures.map((feature) => (
                            <Link
                                key={feature.id}
                                to={`/ai-threat-detection/${feature.id}`}
                                className="group flex items-center gap-4 p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                            >
                                <span className="text-3xl">{feature.icon}</span>
                                <span className="text-white group-hover:text-cyan-400 transition-colors font-semibold">
                                    {feature.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailLayout;
