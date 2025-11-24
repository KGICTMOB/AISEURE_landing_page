import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'ISO 27001 Certification',
        description: 'ISO 27001 정보보안 표준 달성 및 유지를 위한 전문가 가이드.',
        features: ['Gap Analysis (갭 분석)', 'Policy Development (정책 수립)', 'Internal Audit Support (내부 감사 지원)'],
        link: '/consulting/iso27001',
    },
    {
        title: 'ISMS / ISMS-P',
        description: '컴플라이언스 준수를 위한 포괄적인 정보보호 관리체계 컨설팅.',
        features: ['Risk Assessment (위험 평가)', 'Control Implementation (통제 구현)', 'Certification Readiness (인증 준비)'],
        link: '/consulting/isms-p',
    },
    {
        title: 'IT Internal Audit',
        description: 'IT 인프라 및 프로세스에 대한 철저한 평가를 통해 취약점 식별 및 개선.',
        features: ['Vulnerability Assessment (취약점 진단)', 'Process Optimization (프로세스 최적화)', 'Compliance Check (규정 준수 확인)'],
        link: null,
    },
];

const ConsultingSection = () => {
    return (
        <section className="bg-gradient-to-b from-gray-900 to-black py-24 text-white">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">Expert Consulting</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        Strategic guidance to navigate the complex landscape of security compliance.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col rounded-2xl bg-white p-8 text-black shadow-xl transition-transform hover:-translate-y-2"
                        >
                            <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                            <p className="mb-8 flex-grow text-gray-600">{service.description}</p>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm font-medium text-gray-800">
                                        <svg
                                            className="mr-3 h-5 w-5 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            {service.link ? (
                                <Link
                                    to={service.link}
                                    className="mt-8 w-full rounded-lg border-2 border-black py-3 font-semibold transition-colors hover:bg-black hover:text-white text-center block"
                                >
                                    Learn More
                                </Link>
                            ) : (
                                <button className="mt-8 w-full rounded-lg border-2 border-black py-3 font-semibold transition-colors hover:bg-black hover:text-white">
                                    Learn More
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsultingSection;
