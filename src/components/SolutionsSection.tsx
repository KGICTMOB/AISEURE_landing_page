import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useContent } from '@/context/ContentContext';

const SolutionsSection = () => {
    const { content } = useContent();
    const {
        solutionsTitle,
        solutionsSubtitle,
        solution1Title, solution1Desc,
        solution2Title, solution2Desc,
        solution3Title, solution3Desc
    } = content.sections.home;

    const solutions = [
        {
            title: solution1Title,
            description: solution1Desc,
            icon: '🛡️',
            link: '/ai-threat-detection',
        },
        {
            title: solution2Title,
            description: solution2Desc,
            icon: '🏗️',
            link: null,
        },
        {
            title: solution3Title,
            description: solution3Desc,
            icon: '💻',
            link: null,
        },
    ];
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
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">{solutionsTitle}</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        {solutionsSubtitle}
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
