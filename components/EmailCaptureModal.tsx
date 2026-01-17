'use client';

import { useState, useEffect } from 'react';

interface EmailCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
    advice: string;
    question: string;
    age: string;
}

export default function EmailCaptureModal({
    isOpen,
    onClose,
    advice,
    question,
    age,
}: EmailCaptureModalProps) {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setEmail('');
            setIsSuccess(false);
        }
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call - in production, connect to your email service
        // (e.g., Resend, Mailchimp, etc.)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('Email captured:', {
            email,
            age,
            question,
            advicePreview: advice.substring(0, 100),
        });

        setIsSubmitting(false);
        setIsSuccess(true);

        // Close modal after success
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-forest-800/40 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-slide-up">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full 
                     text-forest-500 hover:bg-sand-100 transition-colors"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5"
                    >
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                    </svg>
                </button>

                {!isSuccess ? (
                    <>
                        {/* Header */}
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-400/10 flex items-center justify-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-8 h-8 text-sage-500"
                                >
                                    <rect
                                        x="2"
                                        y="4"
                                        width="20"
                                        height="16"
                                        rx="2"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M22 6l-10 7L2 6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <h2 className="font-serif text-2xl text-forest-800 mb-2">
                                Save This Guidance
                            </h2>
                            <p className="text-forest-600 text-sm">
                                We&apos;ll send this advice to your inbox so you can reference it anytime.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="input-field"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || !email.trim()}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send to My Inbox'
                                )}
                            </button>
                        </form>

                        {/* Privacy note */}
                        <p className="text-xs text-center text-forest-500 mt-4">
                            We respect your inbox. Unsubscribe anytime.
                        </p>
                    </>
                ) : (
                    /* Success State */
                    <div className="text-center py-4">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-400 flex items-center justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-8 h-8 text-white"
                            >
                                <path
                                    d="M5 13l4 4L19 7"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h2 className="font-serif text-2xl text-forest-800 mb-2">
                            On Its Way!
                        </h2>
                        <p className="text-forest-600">
                            Check your inbox for your personalized guidance.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
