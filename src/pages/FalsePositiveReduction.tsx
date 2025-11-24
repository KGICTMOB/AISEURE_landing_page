import { motion } from 'framer-motion';
import DetailLayout from '@/components/DetailLayout';

const FalsePositiveReduction = () => {
    const relatedFeatures = [
        { id: 'adaptive-learning', title: '적응형 학습', icon: '🧠' },
        { id: 'pattern-recognition', title: '고급 패턴 인식', icon: '🔍' },
        { id: 'automated-response', title: '자동화된 대응', icon: '⚡' },
    ];

    return (
        <DetailLayout
            title="오탐률 감소"
            description="양성 및 악성 활동의 차이점을 이해함으로써 보안 팀의 시간 소모적인 위협 평가가 줄어들어 오탐률이 감소합니다."
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
                <h2 className="text-3xl font-bold text-white mb-6">개요</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        전통적인 보안 시스템의 가장 큰 문제 중 하나는 높은 오탐률(False Positive)입니다.
                        AI 기반 오탐률 감소 기술은 정상 활동과 악성 활동을 정확하게 구분하여
                        보안 팀이 실제 위협에만 집중할 수 있도록 합니다.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        컨텍스트 인식 분석과 행동 기반 학습을 통해 정상적인 비즈니스 활동을 이해하고,
                        진짜 위협만을 정확하게 식별합니다.
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
                    <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl p-6 border border-red-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-2xl">
                                ⏱️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">시간 절약</h3>
                                <p className="text-gray-300">
                                    오탐 조사에 소모되는 시간을 대폭 줄여 보안 팀의 생산성을 향상시킵니다.
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
                                <h3 className="text-xl font-bold text-white mb-2">정확한 탐지</h3>
                                <p className="text-gray-300">
                                    실제 위협과 정상 활동을 정확하게 구분하여 탐지 정확도를 높입니다.
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
                                <h3 className="text-xl font-bold text-white mb-2">알람 피로 감소</h3>
                                <p className="text-gray-300">
                                    불필요한 알람을 줄여 보안 팀의 알람 피로(Alert Fatigue)를 방지합니다.
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
                                <h3 className="text-xl font-bold text-white mb-2">비즈니스 연속성</h3>
                                <p className="text-gray-300">
                                    정상적인 비즈니스 활동이 보안 시스템에 의해 방해받지 않도록 보장합니다.
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
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">정상 행동 학습</h4>
                                <p className="text-gray-300">
                                    AI가 조직의 정상적인 사용자 및 시스템 행동 패턴을 학습합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">컨텍스트 분석</h4>
                                <p className="text-gray-300">
                                    이벤트의 맥락(시간, 위치, 사용자 역할 등)을 고려하여 위협 여부를 판단합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">신뢰도 점수 부여</h4>
                                <p className="text-gray-300">
                                    각 알람에 신뢰도 점수를 부여하여 우선순위를 결정합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                4
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">피드백 학습</h4>
                                <p className="text-gray-300">
                                    보안 팀의 피드백을 반영하여 지속적으로 탐지 정확도를 개선합니다.
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
