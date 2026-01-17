'use client';

import SaplingLoader from './SaplingLoader';

interface ResponseDisplayProps {
    response: string;
    isLoading: boolean;
    onReset: () => void;
    onEmailAdvice: () => void;
}

export default function ResponseDisplay({
    response,
    isLoading,
    onReset,
    onEmailAdvice,
}: ResponseDisplayProps) {
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Loading State */}
            {isLoading && !response && (
                <div className="card-elevated flex flex-col items-center justify-center py-12 space-y-6">
                    <SaplingLoader />
                    <div className="text-center space-y-2">
                        <p className="text-forest-600 font-medium">
                            The Guide is observing...
                        </p>
                        <p className="text-sm text-forest-500">
                            Taking a moment to consider your child&apos;s needs
                        </p>
                    </div>
                </div>
            )}

            {/* Response */}
            {response && (
                <div className="card-elevated">
                    {/* Response Header */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-sand-200">
                        <div className="w-10 h-10 rounded-full bg-sage-400/10 flex items-center justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-5 h-5 text-sage-500"
                            >
                                <path
                                    d="M12 2C9 2 6 5 6 9c0 2 1 4 2 5.5V22l4-2 4 2v-7.5c1-1.5 2-3.5 2-5.5 0-4-3-7-6-7z"
                                    fill="currentColor"
                                    opacity="0.3"
                                />
                                <path
                                    d="M12 2C9 2 6 5 6 9c0 2 1 4 2 5.5V22l4-2 4 2v-7.5c1-1.5 2-3.5 2-5.5 0-4-3-7-6-7z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="font-serif font-semibold text-forest-800">
                                Little Sapling Guide
                            </p>
                            <p className="text-xs text-forest-500">Montessori Mentor</p>
                        </div>
                        {isLoading && (
                            <div className="ml-auto">
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-sage-400 rounded-full animate-pulse" />
                                    <span className="w-2 h-2 bg-sage-400 rounded-full animate-pulse delay-75" />
                                    <span className="w-2 h-2 bg-sage-400 rounded-full animate-pulse delay-150" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Response Content */}
                    <div className="prose prose-sm md:prose-base max-w-none">
                        <div className="text-forest-700 leading-relaxed whitespace-pre-wrap">
                            {response}
                        </div>
                    </div>
                </div>
            )}

            {/* Action Buttons - Show only when response is complete */}
            {response && !isLoading && (
                <div className="flex flex-col sm:flex-row gap-3 animate-slide-up">
                    <button
                        onClick={onReset}
                        className="btn-secondary flex-1 flex items-center justify-center gap-2"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-5 h-5"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M3 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Ask Another Question
                    </button>
                    <button
                        onClick={onEmailAdvice}
                        className="btn-terracotta flex-1 flex items-center justify-center gap-2"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-5 h-5"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="M22 6l-10 7L2 6" />
                        </svg>
                        Email This Advice
                    </button>
                </div>
            )}
        </div>
    );
}
