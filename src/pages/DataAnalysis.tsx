import { motion } from 'framer-motion';
import DetailLayout from '@/components/DetailLayout';

const DataAnalysis = () => {
    const relatedFeatures = [
        { id: 'pattern-recognition', title: '고급 패턴 인식', icon: '🔍' },
        { id: 'adaptive-learning', title: '적응형 학습', icon: '🧠' },
        { id: 'predictive-analytics', title: '예측 분석', icon: '🔮' },
    ];

    return (
        <DetailLayout
            title="대규모 데이터 분석"
            description="AI 알고리즘은 인간 분석가가 불가능한 규모와 속도로 위협을 탐지하기 위해 방대한 양의 데이터를 처리하고 분석합니다."
            gradient="from-blue-900 via-indigo-900 to-gray-900"
            icon="📊"
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
                        현대 기업 환경에서는 매일 테라바이트 단위의 보안 데이터가 생성됩니다. 대규모 데이터 분석 기술은
                        AI를 활용하여 이러한 방대한 데이터를 실시간으로 처리하고 분석함으로써 위협을 신속하게 탐지합니다.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        빅데이터 처리 기술과 분산 컴퓨팅을 결합하여 페타바이트 규모의 데이터에서도
                        밀리초 단위로 위협을 식별할 수 있습니다.
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
                    <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                                ⚡
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">실시간 처리</h3>
                                <p className="text-gray-300">
                                    스트리밍 데이터를 실시간으로 분석하여 위협을 즉시 탐지하고 대응합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                                📈
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">확장성</h3>
                                <p className="text-gray-300">
                                    데이터 양이 증가해도 성능 저하 없이 분석 능력을 확장할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                                🔍
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">포괄적 가시성</h3>
                                <p className="text-gray-300">
                                    전체 IT 인프라에 대한 통합된 보안 가시성을 제공합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/30">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                                💡
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">인사이트 도출</h3>
                                <p className="text-gray-300">
                                    데이터에서 의미 있는 보안 인사이트와 트렌드를 자동으로 추출합니다.
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
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">데이터 수집 및 통합</h4>
                                <p className="text-gray-300">
                                    다양한 소스(SIEM, 방화벽, IDS/IPS, 엔드포인트 등)에서 데이터를 수집하고 통합합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">데이터 정규화</h4>
                                <p className="text-gray-300">
                                    서로 다른 형식의 데이터를 표준화된 형태로 변환하여 분석 가능하게 만듭니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">병렬 처리</h4>
                                <p className="text-gray-300">
                                    분산 컴퓨팅 기술을 활용하여 대규모 데이터를 병렬로 처리합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                4
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">AI 기반 분석</h4>
                                <p className="text-gray-300">
                                    머신러닝 모델을 적용하여 위협 패턴을 식별하고 이상 징후를 탐지합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </DetailLayout>
    );
};

export default DataAnalysis;
