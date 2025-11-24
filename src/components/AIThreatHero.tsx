import { motion } from 'framer-motion';

const AIThreatHero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMmQzZCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <motion.h1
                        className="mb-8 text-5xl md:text-7xl font-bold leading-tight text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        현대 위협 탐지에 AI는{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            가장 중요한 솔루션
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
                    >
                        <p>
                            AI 시스템은 이제 사이버 보안 의사 결정의 초석입니다. 이러한 시스템은 광범위한 위협에 능숙하게 대응하고
                            매우 정확한 사고 대응 전략을 자동화합니다. 이러한 발전은 빠르게 진화하는 사이버 위협의 본질과
                            방대한 양의 위협 인텔리전스 입력을 관리해야 하는 과제에 대응하는 데 매우 중요합니다.
                        </p>
                        <p>
                            AI 기반 위협 탐지는 IoT 기기, 클라우드 환경, 모바일 기기 등 공격 벡터의 확장과 같이
                            탐지 및 완화가 어려운 진화하는 위협 전술을 방지하도록 설계되었고, 랜섬웨어를 비롯한
                            사이버 공격의 규모와 속도가 증가하는 상황에 대응하는 것이 목표입니다.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-10"
                    >
                        <a
                            href="#features"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                        >
                            주요 기능 살펴보기
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default AIThreatHero;
