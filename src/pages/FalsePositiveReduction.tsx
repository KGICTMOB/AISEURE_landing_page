import { motion } from 'framer-motion';
import DetailLayout from '@/components/DetailLayout';
import { useContent } from '@/context/ContentContext';

const FalsePositiveReduction = () => {
    const { content } = useContent();
    const {
        title, description, overviewTitle, overviewText1, overviewText2,
        benefitsTitle, benefit1Title, benefit1Desc, benefit2Title, benefit2Desc, benefit3Title, benefit3Desc, benefit4Title, benefit4Desc,
        howItWorksTitle, howItWorks1Title, howItWorks1Desc, howItWorks2Title, howItWorks2Desc, howItWorks3Title, howItWorks3Desc, howItWorks4Title, howItWorks4Desc
    } = content.sections.falsePositiveReduction;

    const relatedFeatures = [
        { id: 'adaptive-learning', title: '적응형 학습', icon: '🧠' },
        { id: 'pattern-recognition', title: '고급 패턴 인식', icon: '🔍' },
        { id: 'automated-response', title: '자동화된 대응', icon: '⚡' },
    ];

    return (
        <DetailLayout
            title={title}
            description={description}
            gradient="from-red-900 via-pink-900 to-gray-900"
            icon="✓"
            relatedFeatures={relatedFeatures}
        >
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

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-white mb-6">{benefitsTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl p-6 border border-red-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-2xl">
                                ⏱️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{benefit1Title}</h3>
                                <p className="text-gray-300">
                                    {benefit1Desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl p-6 border border-red-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-2xl">
                                🎯
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{benefit2Title}</h3>
                                <p className="text-gray-300">
                                    {benefit2Desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl p-6 border border-red-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-2xl">
                                😌
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{benefit3Title}</h3>
                                <p className="text-gray-300">
                                    {benefit3Desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl p-6 border border-red-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-2xl">
                                💼
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{benefit4Title}</h3>
                                <p className="text-gray-300">
                                    {benefit4Desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2 className="text-3xl font-bold text-white mb-6">{howItWorksTitle}</h2>
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">{howItWorks1Title}</h4>
                                <p className="text-gray-300">
                                    {howItWorks1Desc}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">{howItWorks2Title}</h4>
                                <p className="text-gray-300">
                                    {howItWorks2Desc}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">{howItWorks3Title}</h4>
                                <p className="text-gray-300">
                                    {howItWorks3Desc}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                4
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">{howItWorks4Title}</h4>
                                <p className="text-gray-300">
                                    {howItWorks4Desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </DetailLayout>
    );
};

export default FalsePositiveReduction;
