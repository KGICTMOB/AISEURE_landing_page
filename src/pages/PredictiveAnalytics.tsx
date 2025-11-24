import { motion } from 'framer-motion';
import DetailLayout from '@/components/DetailLayout';

const PredictiveAnalytics = () => {
    const relatedFeatures = [
        { id: 'adaptive-learning', title: '적응형 학습', icon: '🧠' },
        { id: 'data-analysis', title: '대규모 데이터 분석', icon: '📊' },
        { id: 'pattern-recognition', title: '고급 패턴 인식', icon: '🔍' },
    ];

    return (
        <DetailLayout
            title="예측 분석"
            description="미래의 위협을 사전에 식별하고 데이터의 추세와 패턴을 분석하여 위협 사냥 작업을 개선합니다."
            gradient="from-green-900 via-teal-900 to-gray-900"
            icon="🔮"
            relatedFeatures={relatedFeatures}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-white mb-6">개요</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        예측 분석은 과거 데이터와 현재 트렌드를 분석하여 미래에 발생할 수 있는 보안 위협을 사전에 예측합니다.
                        이를 통해 조직은 위협이 실제로 발생하기 전에 선제적으로 방어 조치를 취할 수 있습니다.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        머신러닝과 통계 모델링을 활용하여 공격 가능성이 높은 자산을 식별하고,
                        취약점이 악용되기 전에 보안 강화 조치를 권장합니다.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-white mb-6">주요 이점</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-xl p-6 border border-green-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-2xl">
                                🎯
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">선제적 방어</h3>
                                <p className="text-gray-300">
                                    위협이 발생하기 전에 예측하고 대비하여 피해를 원천적으로 차단합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-xl p-6 border border-green-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-2xl">
                                📊
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">리스크 우선순위화</h3>
                                <p className="text-gray-300">
                                    가장 위험한 자산과 취약점을 식별하여 보안 자원을 효율적으로 배분합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-xl p-6 border border-green-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-2xl">
                                🔍
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">향상된 위협 사냥</h3>
                                <p className="text-gray-300">
                                    잠재적 위협을 사전에 식별하여 능동적인 위협 사냥 활동을 지원합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-xl p-6 border border-green-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-2xl">
                                💰
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">비용 절감</h3>
                                <p className="text-gray-300">
                                    사고 발생 후 대응보다 사전 예방이 훨씬 비용 효율적입니다.
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
                <h2 className="text-3xl font-bold text-white mb-6">작동 원리</h2>
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">과거 데이터 분석</h4>
                                <p className="text-gray-300">
                                    과거 보안 사고와 위협 데이터를 분석하여 패턴과 트렌드를 파악합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">예측 모델 구축</h4>
                                <p className="text-gray-300">
                                    머신러닝 알고리즘을 사용하여 미래 위협을 예측하는 모델을 학습합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">리스크 스코어링</h4>
                                <p className="text-gray-300">
                                    각 자산과 시스템에 대한 위험 점수를 계산하여 우선순위를 결정합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white font-bold">
                                4
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">권장 사항 제공</h4>
                                <p className="text-gray-300">
                                    예측된 위협에 대응하기 위한 구체적인 보안 조치를 권장합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </DetailLayout>
    );
};

export default PredictiveAnalytics;
