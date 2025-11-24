import { motion } from 'framer-motion';

const Methodologies = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        위협 탐지에{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            활용하는 AI
                        </span>
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {/* Method 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative pl-12 border-l-4 border-cyan-500"
                    >
                        <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                            1
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">머신 러닝 알고리즘</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            머신러닝 알고리즘은 새롭고 복잡한 위협을 신속하게 탐지하는 데 도움이 될 수 있습니다.
                            이러한 알고리즘은 과거 사고 데이터를 분석하여 패턴을 파악하고 잠재적 위협을 예측하여
                            위협 탐지의 정확도와 속도를 향상시킵니다.
                        </p>
                    </motion.div>

                    {/* Method 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative pl-12 border-l-4 border-blue-500"
                    >
                        <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                            2
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">데이터 처리 및 처리</h3>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            위협 탐지를 위한 데이터 처리에는 잠재적 위협을 식별하기 위해 방대한 양의 데이터를 수집, 정제 및 분석하는 과정이 포함됩니다.
                            이 과정에는 노이즈 필터링, 데이터 정규화, 그리고 AI 알고리즘을 적용하여 보안 침해, 사이버 공격 또는
                            맬웨어나 랜섬웨어와 같은 기타 악의적인 활동을 나타내는 이상 징후나 패턴을 탐지하는 과정이 포함됩니다.
                        </p>

                        {/* Sub-list */}
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                            <h4 className="text-lg font-semibold text-cyan-400 mb-4">데이터 수집 소스:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-300">
                                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>네트워크 트래픽 로그</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>시스템 이벤트 로그</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>사용자 활동 기록</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Methodologies;
