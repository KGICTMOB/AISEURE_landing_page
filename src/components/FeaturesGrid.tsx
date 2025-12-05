import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const FeaturesGrid = () => {
    const { content } = useContent();
    const { title: sectionTitle } = content.sections.featuresGrid;

    const features = [
        {
            id: 'adaptiveLearning',
            icon: '🧠',
            gradient: 'from-purple-500 to-pink-500',
            link: 'adaptive-learning'
        },
        {
            id: 'patternRecognition',
            icon: '🔍',
            gradient: 'from-cyan-500 to-blue-500',
            link: 'pattern-recognition'
        },
        {
            id: 'dataAnalysis',
            icon: '📊',
            gradient: 'from-blue-500 to-indigo-500',
            link: 'data-analysis'
        },
        {
            id: 'automatedResponse',
            icon: '⚡',
            gradient: 'from-yellow-500 to-orange-500',
            link: 'automated-response'
        },
        {
            id: 'predictiveAnalytics',
            icon: '🔮',
            gradient: 'from-green-500 to-teal-500',
            link: 'predictive-analytics'
        },
        {
            id: 'falsePositiveReduction',
            icon: '✓',
            gradient: 'from-red-500 to-pink-500',
            link: 'false-positive-reduction'
        },
    ];

    return (
        <section id="features" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {sectionTitle}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const sectionData = content.sections[feature.id];
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/${feature.link}`}
                                    className="block h-full"
                                >
                                    <div className="group relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                                        {/* Icon */}
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 text-3xl`}>
                                            {feature.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                            {sectionData?.title || 'Loading...'}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 leading-relaxed mb-4">
                                            {sectionData?.description || 'Loading...'}
                                        </p>

                                        {/* Arrow Icon */}
                                        <div className="flex items-center text-cyan-400 font-semibold group-hover:gap-2 transition-all">
                                            자세히 보기
                                            <svg
                                                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>

                                        {/* Gradient Border Effect */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
