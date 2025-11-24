import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactModal from '@/components/ContactModal';

const ISMSP = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section */}
            <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-purple-900 via-pink-900 to-gray-900 overflow-hidden">
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
                        <div className="text-6xl">🔐</div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">ISMS-P 인증</h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                정보보호 및 개인정보보호 관리체계 인증으로 통합 컴플라이언스를 관리합니다.
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
                        <h2 className="text-3xl font-bold text-white mb-6">ISMS-P란?</h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                ISMS-P(Information Security Management System - Personal Information)는
                                정보보호 및 개인정보보호를 위한 일련의 조치와 활동이 인증기준에 적합함을
                                한국인터넷진흥원(KISA) 또는 인증기관이 증명하는 제도입니다.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                기존의 정보보호 관리체계(ISMS)와 개인정보보호 관리체계(PIMS)를 통합한 인증으로,
                                조직의 정보보호와 개인정보보호를 통합적으로 관리할 수 있습니다.
                            </p>
                        </div>
                    </motion.div>

                    {/* 법적 근거 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">법적 근거</h2>
                        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-purple-400 mb-3">정보통신망법</h3>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• 제47조 (관리체계 인증)</li>
                                        <li>• 시행령 제47조~제54조</li>
                                        <li>• 시행규칙 제3조</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-pink-400 mb-3">개인정보보호법</h3>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• 제32조의2 (인증)</li>
                                        <li>• 시행령 제34조의2~제34조의8</li>
                                        <li>• 관리체계 인증 등에 관한 고시</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 인증 기준 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">인증 기준 (총 101개 항목)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* 관리체계 수립 및 운영 */}
                            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/30">
                                <div className="text-center mb-4">
                                    <div className="text-5xl mb-2">📋</div>
                                    <h3 className="text-2xl font-bold text-white mb-1">16개</h3>
                                    <p className="text-blue-300 font-semibold">관리체계 수립 및 운영</p>
                                </div>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• 관리체계 기반 마련</li>
                                    <li>• 위험관리</li>
                                    <li>• 관리체계 운영</li>
                                    <li>• 관리체계 점검 및 개선</li>
                                </ul>
                            </div>

                            {/* 보호대책 요구사항 */}
                            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
                                <div className="text-center mb-4">
                                    <div className="text-5xl mb-2">🛡️</div>
                                    <h3 className="text-2xl font-bold text-white mb-1">64개</h3>
                                    <p className="text-green-300 font-semibold">보호대책 요구사항</p>
                                </div>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• 정책, 조직, 자산관리</li>
                                    <li>• 인적보안 / 외부자 보안</li>
                                    <li>• 물리보안</li>
                                    <li>• 인증 및 권한관리</li>
                                    <li>• 접근통제 / 암호화 적용</li>
                                    <li>• 시스템 및 서비스 관리</li>
                                    <li>• 사고 예방 및 대응</li>
                                    <li>• 재해복구</li>
                                </ul>
                            </div>

                            {/* 개인정보 처리단계별 요구사항 */}
                            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
                                <div className="text-center mb-4">
                                    <div className="text-5xl mb-2">👤</div>
                                    <h3 className="text-2xl font-bold text-white mb-1">21개</h3>
                                    <p className="text-purple-300 font-semibold">개인정보 처리단계별</p>
                                </div>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• 개인정보 수집 시 보호조치</li>
                                    <li>• 보유 및 이용 시 보호조치</li>
                                    <li>• 제공 시 보호조치</li>
                                    <li>• 파기 시 보호조치</li>
                                    <li>• 정보주체 권리보호</li>
                                </ul>
                            </div>
                        </div>

                        {/* 
                            ============================================
                            이미지 삽입 위치 #1: ISMS-P 인증기준 구조도
                            ============================================
                            여기에 ISMS-P의 3가지 인증기준 (관리체계 16개 + 보호대책 64개 + 
                            개인정보 처리 21개 = 총 101개)을 시각화한 구조도 이미지를 
                            삽입하면 좋습니다.
                            
                            예시 코드:
                            <div className="my-8">
                                <img 
                                    src="/path/to/isms-p-structure.png" 
                                    alt="ISMS-P 인증기준 구조" 
                                    className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
                                />
                            </div>
                        */}
                    </motion.div>

                    {/* 인증 대상 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">인증 대상</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-purple-400">⚡</span>
                                    의무 인증 대상
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• 정보통신서비스 부문 전년도 매출액 100억원 이상</li>
                                    <li>• 정보통신서비스 부문 전년도 3개월간 일일평균 이용자 수 100만명 이상</li>
                                    <li>• 개인정보 처리자 중 전년도 말 기준 직전 3개월간 개인정보가 저장·관리되고 있는 이용자 수가 일일평균 100만명 이상</li>
                                </ul>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-pink-400">✓</span>
                                    자율 인증 대상
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• 의무 인증 대상이 아닌 모든 기업 및 기관</li>
                                    <li>• 정보보호 및 개인정보보호 관리 수준 향상을 원하는 조직</li>
                                    <li>• 고객 신뢰 확보 및 경쟁력 강화를 원하는 조직</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* 인증 효과 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">인증 효과</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '📜', title: '법적 의무 준수', desc: '정보통신망법 및 개인정보보호법 준수 입증' },
                                { icon: '🏅', title: '신뢰성 향상', desc: '고객 및 이해관계자에 대한 신뢰성 제고' },
                                { icon: '🔒', title: '정보자산 보호', desc: '체계적인 정보보호 및 개인정보보호 관리' },
                                { icon: '⚖️', title: '리스크 관리', desc: '정보보호 및 개인정보 관련 리스크 최소화' },
                                { icon: '💰', title: '과태료 면제', desc: '인증 획득 시 과태료 경감 혜택' },
                                { icon: '🎯', title: '경쟁력 강화', desc: '입찰 및 사업 수주 시 가점 부여' },
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
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
                        <h2 className="text-3xl font-bold text-white mb-6">AISEURE ISMS-P 컨설팅 서비스</h2>
                        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/30">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Risk Assessment (위험 평가)</h4>
                                        <p className="text-gray-300">
                                            조직의 정보자산을 식별하고 위험을 평가하여 적절한 보호대책을 수립합니다.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Control Implementation (통제 구현)</h4>
                                        <p className="text-gray-300">
                                            ISMS-P 인증기준에 따른 101개 통제항목을 조직 환경에 맞게 구현합니다.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Certification Readiness (인증 준비)</h4>
                                        <p className="text-gray-300">
                                            모의 심사를 통해 인증 준비 상태를 점검하고 미비점을 개선합니다.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Continuous Improvement (지속적 개선)</h4>
                                        <p className="text-gray-300">
                                            인증 획득 후에도 관리체계를 지속적으로 개선하고 갱신 심사를 지원합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">ISMS-P 인증에 관심이 있으신가요?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        AISEURE의 전문가와 상담하여 귀사에 최적화된 인증 전략을 수립하세요.
                    </p>
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
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

export default ISMSP;
