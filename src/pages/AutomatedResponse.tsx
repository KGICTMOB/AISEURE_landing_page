import { motion } from 'framer-motion';
import DetailLayout from '@/components/DetailLayout';

const AutomatedResponse = () => {
    const relatedFeatures = [
        { id: 'adaptive-learning', title: '적응형 학습', icon: '🧠' },
        { id: 'pattern-recognition', title: '고급 패턴 인식', icon: '🔍' },
        { id: 'false-positive-reduction', title: '오탐률 감소', icon: '✓' },
    ];

    return (
        <DetailLayout
            title="자동화된 대응"
            description="자동화된 대응으로 위협을 신속하게 완화합니다."
            gradient="from-yellow-900 via-orange-900 to-gray-900"
            icon="⚡"
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
                        자동화된 대응 시스템은 위협이 탐지되는 즉시 사전 정의된 플레이북에 따라 자동으로 대응 조치를 실행합니다.
                        이를 통해 위협 대응 시간을 몇 시간에서 몇 초로 단축시킬 수 있습니다.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        SOAR(Security Orchestration, Automation and Response) 플랫폼과 통합되어
                        복잡한 대응 워크플로우를 자동화하고 보안 팀의 효율성을 극대화합니다.
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
                    <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-2xl">
                                ⚡
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">즉각적인 대응</h3>
                                <p className="text-gray-300">
                                    위협 탐지 후 수 초 내에 자동으로 대응 조치를 실행하여 피해를 최소화합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-2xl">
                                🎯
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">일관된 대응</h3>
                                <p className="text-gray-300">
                                    사람의 실수를 제거하고 모든 위협에 대해 일관되고 정확한 대응을 보장합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-2xl">
                                👥
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">인력 효율화</h3>
                                <p className="text-gray-300">
                                    반복적인 대응 작업을 자동화하여 보안 팀이 더 중요한 업무에 집중할 수 있게 합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-2xl">
                                🌐
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">24/7 보호</h3>
                                <p className="text-gray-300">
                                    사람의 개입 없이도 연중무휴로 위협에 대응하여 지속적인 보안을 유지합니다.
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
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">위협 탐지 및 분류</h4>
                                <p className="text-gray-300">
                                    AI가 위협을 탐지하고 심각도와 유형에 따라 자동으로 분류합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">플레이북 선택</h4>
                                <p className="text-gray-300">
                                    위협 유형에 맞는 사전 정의된 대응 플레이북을 자동으로 선택합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">자동 대응 실행</h4>
                                <p className="text-gray-300">
                                    격리, 차단, 패치 적용 등의 대응 조치를 자동으로 실행합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold">
                                4
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">결과 모니터링 및 보고</h4>
                                <p className="text-gray-300">
                                    대응 결과를 모니터링하고 보안 팀에게 상세한 보고서를 제공합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </DetailLayout>
    );
};

export default AutomatedResponse;
