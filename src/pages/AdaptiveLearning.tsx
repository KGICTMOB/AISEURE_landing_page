import { motion } from 'framer-motion';
import DetailLayout from '@/components/DetailLayout';

const AdaptiveLearning = () => {
    const relatedFeatures = [
        { id: 'pattern-recognition', title: '고급 패턴 인식', icon: '🔍' },
        { id: 'predictive-analytics', title: '예측 분석', icon: '🔮' },
        { id: 'data-analysis', title: '대규모 데이터 분석', icon: '📊' },
    ];

    return (
        <DetailLayout
            title="적응형 학습"
            description="AI 시스템의 머신 러닝 모델을 사용하여 진화하는 위협에 대응하기 위한 위협 탐지 기능을 지속적으로 개선합니다."
            gradient="from-purple-900 via-pink-900 to-gray-900"
            icon="🧠"
            relatedFeatures={relatedFeatures}
        >
            {/* Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-white mb-6">개요</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        적응형 학습은 AI 기반 위협 탐지 시스템의 핵심 요소로, 시스템이 새로운 위협 패턴을 지속적으로 학습하고
                        적응할 수 있도록 합니다. 이 기술은 머신 러닝 알고리즘을 활용하여 과거 데이터와 실시간 위협 정보를
                        분석함으로써 탐지 정확도를 지속적으로 향상시킵니다.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        전통적인 시그니처 기반 탐지 방식과 달리, 적응형 학습 시스템은 알려지지 않은 위협(Zero-day attacks)도
                        효과적으로 탐지할 수 있으며, 공격자의 전술이 변화함에 따라 자동으로 방어 메커니즘을 업데이트합니다.
                    </p>
                </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-white mb-6">주요 이점</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                                🎯
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">높은 탐지 정확도</h3>
                                <p className="text-gray-300">
                                    지속적인 학습을 통해 오탐(False Positive)과 미탐(False Negative)을 최소화하여
                                    위협 탐지의 정확도를 극대화합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                                ⚡
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">실시간 적응</h3>
                                <p className="text-gray-300">
                                    새로운 위협 패턴이 발견되면 즉시 학습하여 모델을 업데이트하므로
                                    최신 공격 기법에도 신속하게 대응할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                                🛡️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Zero-day 공격 방어</h3>
                                <p className="text-gray-300">
                                    알려지지 않은 새로운 공격 유형도 행동 패턴 분석을 통해 탐지하여
                                    조직을 최신 위협으로부터 보호합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                                📈
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">지속적인 개선</h3>
                                <p className="text-gray-300">
                                    시간이 지남에 따라 시스템 성능이 자동으로 향상되어
                                    장기적으로 더욱 강력한 보안 태세를 유지할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* How it Works */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2 className="text-3xl font-bold text-white mb-6">작동 원리</h2>
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">데이터 수집 및 전처리</h4>
                                <p className="text-gray-300">
                                    네트워크 트래픽, 시스템 로그, 사용자 행동 등 다양한 소스에서 데이터를 수집하고
                                    분석 가능한 형태로 정제합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">특징 추출 및 학습</h4>
                                <p className="text-gray-300">
                                    머신 러닝 알고리즘이 데이터에서 중요한 특징을 추출하고,
                                    정상 행동과 비정상 행동의 패턴을 학습합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">실시간 탐지 및 분류</h4>
                                <p className="text-gray-300">
                                    학습된 모델을 사용하여 실시간으로 들어오는 데이터를 분석하고
                                    위협 여부를 판단합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                4
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">피드백 및 모델 업데이트</h4>
                                <p className="text-gray-300">
                                    탐지 결과와 보안 분석가의 피드백을 바탕으로 모델을 지속적으로 재학습하여
                                    성능을 개선합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </DetailLayout>
    );
};

export default AdaptiveLearning;
