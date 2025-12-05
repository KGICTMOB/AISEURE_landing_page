import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';

const Methodologies = () => {
    const { content } = useContent();
    const {
        title,
        method1Title, method1Desc,
        method2Title, method2Desc, method2SubTitle, method2List
    } = content.sections.methodologies;

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {title}
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {/* Method 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative pl-12 border-l-4 border-cyan-500"
                    >
                        <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                            1
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{method1Title}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {method1Desc}
                        </p>
                    </motion.div>

                    {/* Method 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative pl-12 border-l-4 border-blue-500"
                    >
                        <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                            2
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{method2Title}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {method2Desc}
                        </p>

                        {/* Sub-list */}
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                            <h4 className="text-lg font-semibold text-cyan-400 mb-4">{method2SubTitle}</h4>
                            <ul className="space-y-3">
                                {method2List.split('|').map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Methodologies;
