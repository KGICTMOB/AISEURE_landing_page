import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const solutions = [
    {
        title: 'AI Threat Detection',
        description: 'AI 핵심 6개의 기능을 제공하며 (적응형 학습, 패턴 인식, 데이터 분석, 자동화된 대응, 예측 분석, 오탐률 감소)',
        icon: '🛡️',
        link: '/ai-threat-detection',
    },
    {
        title: 'Security Architecture',
        description: '기업 환경에 최적화된 견고하고 확장 가능한 보안 인프라 설계.',
        icon: '🏗️',
        link: null,
    },
    {
        title: 'Full-Stack Implementation',
        description: '프론트엔드 인터페이스부터 백엔드 데이터베이스까지 엔드투엔드 보안 통합.',
        icon: '💻',
        link: null,
    },
];

const SolutionsSection = () => {
    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Solutions</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        Comprehensive AI-driven security strategies to safeguard your digital assets.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {solutions.map((solution, index) => {
                        const CardContent = (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-blue-500/50 hover:bg-gray-900 ${solution.link ? 'cursor-pointer' : ''}`}
                            >
                                <div className="mb-6 text-4xl">{solution.icon}</div>
                                <h3 className="mb-4 text-2xl font-semibold text-white group-hover:text-blue-400">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-400">{solution.description}</p>
                                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20" />
                            </motion.div>
                        );

                        return solution.link ? (
                            <Link key={index} to={solution.link}>
                                {CardContent}
                            </Link>
                        ) : (
                            CardContent
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
