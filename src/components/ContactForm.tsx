import { useState } from 'react';
import { useContent } from '@/context/ContentContext';

const ContactForm = () => {
    const { content } = useContent();
    const {
        nameLabel, companyLabel, emailLabel, phoneLabel, messageLabel,
        privacyTitle, privacyContent, privacyAgreeLabel, privacyDisagreeLabel,
        submitButtonText, submittingText, successTitle, successDesc, newInquiryButtonText, errorText
    } = content.sections.contactForm;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        privacyAgreement: '' // 'agree' or 'disagree'
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePrivacyChange = (value: string) => {
        setFormData(prev => ({ ...prev, privacyAgreement: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.privacyAgreement) {
            alert('개인정보 수집 및 이용에 동의 여부를 체크해주세요.');
            return;
        }

        setStatus('submitting');

        const scriptUrl = 'https://script.google.com/macros/s/AKfycbwOD2DLvJehRQKytQJbxZfRDPa1kP8QBDFqoqG-pI9eb8pckzRSanh9clQjSBHnudgc6w/exec';

        try {
            const params = new URLSearchParams();
            params.append('name', formData.name);
            params.append('company', formData.company);
            params.append('email', formData.email);
            params.append('phone', formData.phone);
            params.append('message', formData.message);
            params.append('privacyAgreement', formData.privacyAgreement === 'agree' ? '동의함' : '동의하지 않음');

            await fetch(scriptUrl, {
                method: 'POST',
                body: params,
                mode: 'no-cors' // Important for Google Apps Script Web App
            });

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', company: '', message: '', privacyAgreement: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 rounded-full bg-green-100 p-3 text-green-600">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{successTitle}</h3>
                <p className="text-gray-600">{successDesc}</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-blue-600 hover:text-blue-700 font-medium"
                >
                    {newInquiryButtonText}
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">{nameLabel}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700">{companyLabel}</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">{emailLabel}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">{phoneLabel}</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">{messageLabel}</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
            </div>

            {/* Privacy Policy Section */}
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                <h4 className="mb-2 text-sm font-bold text-gray-900">{privacyTitle}</h4>
                <div className="mb-4 h-32 overflow-y-auto rounded border border-gray-300 bg-white p-3 text-xs text-gray-600 whitespace-pre-wrap">
                    {privacyContent}
                </div>
                <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="privacyAgreement"
                            value="agree"
                            checked={formData.privacyAgreement === 'agree'}
                            onChange={() => handlePrivacyChange('agree')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{privacyAgreeLabel}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="privacyAgreement"
                            value="disagree"
                            checked={formData.privacyAgreement === 'disagree'}
                            onChange={() => handlePrivacyChange('disagree')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{privacyDisagreeLabel}</span>
                    </label>
                </div>
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full rounded-md bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400"
                >
                    {status === 'submitting' ? submittingText : submitButtonText}
                </button>
            </div>

            {status === 'error' && (
                <p className="text-center text-sm text-red-600">
                    {errorText}
                </p>
            )}
        </form>
    );
};

export default ContactForm;
