

import ContactForm from './ContactForm';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
            <div
                className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 text-gray-600 hover:text-gray-900 transition-colors bg-white/80 rounded-full p-1 hover:bg-white"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Custom Header Banner - Replicating Google Forms Header */}
                <div className="relative w-full h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden shrink-0">
                    {/* Particle Effect Overlay */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.5),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(236,72,153,0.5),transparent_50%)]"></div>
                    </div>

                    {/* Header Text */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide" style={{
                            textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
                            WebkitTextStroke: '2px rgba(59, 130, 246, 0.3)'
                        }}>
                            AI Security Full-Stack!
                        </h1>
                        <p className="text-xl md:text-2xl text-white font-semibold">
                            AI 보안의 선두 기업 AISEURE입니다!
                        </p>
                    </div>
                </div>

                {/* Form Title Section */}
                <div className="bg-white px-8 py-6 border-b border-gray-200 shrink-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">AISEURE 상담문의</h2>
                    <p className="text-gray-600">고객이 원하는 AI 보안에 대한 정보는 물론 솔루션과 컨설팅 문의에 친절히 대응해 드리겠습니다</p>
                </div>

                {/* Contact Form Component */}
                <div className="flex-1 overflow-auto bg-white">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
