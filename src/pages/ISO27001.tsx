import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactModal from '@/components/ContactModal';

const ISO27001 = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section */}
            <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMmQzZCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        홈으로 돌아가기
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-start gap-6"
                    >
                        <div className="text-6xl">🔒</div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">ISO 27001 인증</h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                정보보안 경영시스템의 국제 표준 인증으로 조직의 정보자산을 체계적으로 보호합니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    {/* 개요 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">ISO 27001이란?</h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                ISO 27001은 조직이나 기업이 정보보안 경영시스템(Information Security Management System: ISMS)을
                                수립하여 이행하고 감시 및 검토, 유지, 개선하기 위해 필요한 요구사항을 명시한 국제표준입니다.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                국제표준화기구(ISO) 및 국제전기기술위원회(IEC)에서 제정한 정보보호 관리체계에 대한 국제표준으로서
                                Plan-Do-Check-Action(PDCA) 모델을 채택하여 정보자산의 기밀성, 무결성, 가용성을 실현합니다.
                            </p>
                        </div>

                        {/* 
                            ============================================
                            이미지 삽입 위치 #1: PDCA 모델 다이어그램
                            ============================================
                            여기에 ISO 27001의 PDCA (Plan-Do-Check-Act) 사이클을 
                            설명하는 다이어그램 이미지를 삽입하면 좋습니다.
                            
                            예시 코드:
                            <div className="my-8">
                                <img 
                                    src="/path/to/pdca-diagram.png" 
                                    alt="ISO 27001 PDCA Cycle" 
                                    className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"
                                />
                            </div>
                        */}
                    </motion.div>

                    {/* 핵심 원칙 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">정보보안 3대 원칙</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/30">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                                        🔐
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">기밀성 (Confidentiality)</h3>
                                        <p className="text-gray-300">
                                            접근이 인가된 사람만이 정보에 접근 가능함을 보장
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/30">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">무결성 (Integrity)</h3>
                                        <p className="text-gray-300">
                                            정보 및 처리 방법의 정확성 및 완전성을 보호
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/30">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                                        ⚡
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">가용성 (Availability)</h3>
                                        <p className="text-gray-300">
                                            인가된 사용자가 필요시 정보 및 관련 자산에 접근하는 것을 보장
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 도입 배경 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">도입 배경</h2>
                        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">▸</span>
                                    <span className="text-gray-300">기업에게 돌이킬 수 없는 경제적 손실과 기업 이미지 손상을 초래하는 정보보안사고 확산</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">▸</span>
                                    <span className="text-gray-300">체계적인 정보 관리의 필요성 증대</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">▸</span>
                                    <span className="text-gray-300">정보자산과 고객정보의 보호 및 정보의 이용가치 제고를 통한 기업경쟁력 향상</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">▸</span>
                                    <span className="text-gray-300">시스템 표준을 통한 정보의 체계적이고 지속적인 관리</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* 도입 필요성 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">도입 필요성</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-red-400">⚠️</span>
                                    보안 위협 증가
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• 인터넷 확산으로 인한 새로운 보안위협 증가</li>
                                    <li>• 내부 정보 유출자의 증가</li>
                                    <li>• 해킹에 의한 침해 사고의 증가</li>
                                    <li>• 첨단 기술 및 중요 정보 유출</li>
                                </ul>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-yellow-400">📊</span>
                                    관리 체계 부재
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• 약 3/4의 조직이 보안문제를 처리할 수 있는 시스템 부재</li>
                                    <li>• 30% 이상의 조직이 정보의 중요성을 인식하지 못함</li>
                                    <li>• 관련 법규 및 규정에 대한 준수 필요</li>
                                    <li>• 체계적이고 종합적인 정보보호 관리 필요</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* 도입 효과 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">도입 효과</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '🎯', title: '위험 관리', desc: '조직의 위험을 올바르게 파악, 심사 및 관리' },
                                { icon: '🏆', title: '경쟁력 향상', desc: '고객 정보 보호를 통한 신뢰성 및 경쟁력 제고' },
                                { icon: '🛡️', title: '자산 보호', desc: '이해관계자와 고객 데이터 등 조직 자산 보호' },
                                { icon: '📈', title: '지속적 개선', desc: '정기적인 심사를 통한 성과 모니터링' },
                                { icon: '💼', title: '비즈니스 연속성', desc: '정보시스템 보호 및 비즈니스 연속성 보장' },
                                { icon: '🌐', title: '해외 진출', desc: '글로벌 시장 진출 시 경쟁 우위 확보' },
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* AISEURE 컨설팅 서비스 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">AISEURE ISO 27001 컨설팅 서비스</h2>
                        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-8 border border-blue-500/30">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Gap Analysis (갭 분석)</h4>
                                        <p className="text-gray-300">
                                            현재 조직의 정보보안 수준을 ISO 27001 기준과 비교하여 개선이 필요한 영역을 식별합니다.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Policy Development (정책 수립)</h4>
                                        <p className="text-gray-300">
                                            조직에 맞는 정보보안 정책, 절차, 지침을 개발하고 문서화합니다.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Internal Audit Support (내부 감사 지원)</h4>
                                        <p className="text-gray-300">
                                            인증 심사 전 내부 감사를 실시하여 준비 상태를 점검하고 개선사항을 도출합니다.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Certification Support (인증 지원)</h4>
                                        <p className="text-gray-300">
                                            인증 심사 준비부터 인증 획득까지 전 과정을 지원하고 사후 관리를 도와드립니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">ISO 27001 인증에 관심이 있으신가요?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        AISEURE의 전문가와 상담하여 귀사에 최적화된 인증 전략을 수립하세요.
                    </p>
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl"
                    >
                        무료 상담 신청하기
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </section>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    );
};

export default ISO27001;
