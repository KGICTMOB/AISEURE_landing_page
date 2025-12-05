import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useContent } from '@/context/ContentContext';

const ConsultingSection = () => {
    const { content } = useContent();
    const {
        consultingTitle,
        consultingSubtitle,
        consulting1Title, consulting1Desc, consulting1Features,
        consulting2Title, consulting2Desc, consulting2Features,
        consulting3Title, consulting3Desc, consulting3Features
    } = content.sections.home;

    const services = [
        {
            title: consulting1Title,
            description: consulting1Desc,
            features: consulting1Features ? consulting1Features.split('|') : [],
            link: '/consulting/iso27001',
        },
        {
            title: consulting2Title,
            description: consulting2Desc,
            features: consulting2Features ? consulting2Features.split('|') : [],
            link: '/consulting/isms-p',
        },
        {
            title: consulting3Title,
            description: consulting3Desc,
            features: consulting3Features ? consulting3Features.split('|') : [],
            link: null,
        },
    ];
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
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">{consultingTitle}</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        {consultingSubtitle}
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
