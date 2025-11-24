import { motion } from 'framer-motion';
import heroPoster from '@/assets/hero-poster-ultra.png';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Animated Background Image (Fallback/Poster) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={heroPoster}
                    alt="Security Operation Center"
                    className="h-full w-full object-cover opacity-60 animate-ken-burns scale-105"
                />
            </div>

            {/* Video Background (Overlay) */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-60 mix-blend-overlay"
                >
                    {/* Priority: Local file */}
                    <source src="/hero-video.mp4" type="video/mp4" />
                    {/* Fallback: Reliable public URL (Abstract Blue Tech) */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-circuits-989-large.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-center px-6 text-white md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
                        AI Security <br />
                        <span className="text-blue-500">Full-Stack Master Plan</span>
                    </h1>
                    <p className="mb-8 text-xl text-gray-300 md:text-2xl leading-relaxed">
                        AI 기반의 보안 솔루션으로 귀사의 미래를 보호하십시오.<br />
                        <span className="font-semibold text-white">ISO 27001, ISMS-P</span> 및 <span className="font-semibold text-white">IT Audit</span> 컨설팅.
                    </p>
                    <button className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700">
                        Get a Quote
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
