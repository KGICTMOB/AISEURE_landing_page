import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
    {
        id: 'adaptive-learning',
        title: '적응형 학습',
        description: 'AI 시스템의 머신 러닝 모델을 사용하여 진화하는 위협에 대응하기 위한 위협 탐지 기능을 지속적으로 개선합니다.',
        icon: '🧠',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        id: 'pattern-recognition',
        title: '고급 패턴 인식',
        description: '인간 분석가가 감지할 수 없는 미묘한 악성 활동 징후를 포함하여 방대한 양의 데이터에서 공격자의 패턴과 이상을 식별합니다.',
        icon: '🔍',
        gradient: 'from-cyan-500 to-blue-500',
    },
    {
        id: 'data-analysis',
        title: '대규모 데이터 분석',
        description: 'AI 알고리즘은 인간 분석가가 불가능한 규모와 속도로 위협을 탐지하기 위해 방대한 양의 데이터를 처리하고 분석합니다.',
        icon: '📊',
        gradient: 'from-blue-500 to-indigo-500',
    },
    {
        id: 'automated-response',
        title: '자동화된 대응',
        description: '자동화된 대응으로 위협을 신속하게 완화합니다.',
        icon: '⚡',
        gradient: 'from-yellow-500 to-orange-500',
    },
    {
        id: 'predictive-analytics',
        title: '예측 분석',
        description: '미래의 위협을 사전에 식별하고 데이터의 추세와 패턴을 분석하여 위협 사냥 작업을 개선합니다.',
        icon: '🔮',
        gradient: 'from-green-500 to-teal-500',
    },
    {
        id: 'false-positive-reduction',
        title: '오탐률 감소',
        description: '양성 및 악성 활동의 차이점을 이해함으로써 보안 팀의 시간 소모적인 위협 평가가 줄어들어 오탐률이 감소합니다.',
        icon: '✓',
        gradient: 'from-red-500 to-pink-500',
    },
];

const FeaturesGrid = () => {
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
                        사이버 보안 방어를 강화하는{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            AI 기능
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                to={`/ai-threat-detection/${feature.id}`}
                                className="block h-full"
                            >
                                <div className="group relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 text-3xl`}>
                                        {feature.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        {feature.description}
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
