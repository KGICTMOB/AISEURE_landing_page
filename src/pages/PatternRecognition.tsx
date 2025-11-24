import { motion } from 'framer-motion';
import DetailLayout from '@/components/DetailLayout';

const PatternRecognition = () => {
    const relatedFeatures = [
        { id: 'adaptive-learning', title: '적응형 학습', icon: '🧠' },
        { id: 'data-analysis', title: '대규모 데이터 분석', icon: '📊' },
        { id: 'automated-response', title: '자동화된 대응', icon: '⚡' },
    ];

    return (
        <DetailLayout
            title="고급 패턴 인식"
            description="인간 분석가가 감지할 수 없는 미묘한 악성 활동 징후를 포함하여 방대한 양의 데이터에서 공격자의 패턴과 이상을 식별합니다."
            gradient="from-cyan-900 via-blue-900 to-gray-900"
            icon="🔍"
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
                        고급 패턴 인식은 AI가 복잡한 데이터 세트에서 숨겨진 패턴과 이상 징후를 발견할 수 있게 하는 핵심 기술입니다.
                        딥러닝과 고급 통계 분석을 활용하여 인간 분석가가 놓칠 수 있는 미세한 공격 신호를 탐지합니다.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        이 기술은 APT(Advanced Persistent Threat) 공격과 같이 장기간에 걸쳐 은밀하게 진행되는
                        정교한 공격을 탐지하는 데 특히 효과적입니다.
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
                    <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                                🎯
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">미세한 이상 징후 탐지</h3>
                                <p className="text-gray-300">
                                    정상 행동에서 벗어난 미세한 변화도 감지하여 초기 단계의 공격을 차단합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                                🔗
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">연관 관계 분석</h3>
                                <p className="text-gray-300">
                                    서로 다른 이벤트 간의 숨겨진 연관성을 발견하여 복합 공격을 식별합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                                🕵️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">APT 탐지</h3>
                                <p className="text-gray-300">
                                    장기간에 걸친 은밀한 공격 패턴을 식별하여 고급 지속 위협을 방어합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                                📈
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">행동 기반 분석</h3>
                                <p className="text-gray-300">
                                    시그니처가 아닌 행동 패턴을 분석하여 새로운 유형의 공격도 탐지합니다.
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
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">다차원 데이터 수집</h4>
                                <p className="text-gray-300">
                                    네트워크, 엔드포인트, 애플리케이션 등 다양한 소스에서 데이터를 수집합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">정상 행동 프로파일링</h4>
                                <p className="text-gray-300">
                                    AI가 정상적인 사용자 및 시스템 행동의 베이스라인을 학습합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">이상 징후 탐지</h4>
                                <p className="text-gray-300">
                                    베이스라인에서 벗어난 행동을 실시간으로 식별하고 위험도를 평가합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                                4
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">패턴 상관 분석</h4>
                                <p className="text-gray-300">
                                    개별 이벤트를 연결하여 공격 캠페인의 전체 그림을 파악합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </DetailLayout>
    );
};

export default PatternRecognition;
