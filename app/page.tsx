'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import GuideForm from '@/components/GuideForm';
import ResponseDisplay from '@/components/ResponseDisplay';
import EmailCaptureModal from '@/components/EmailCaptureModal';

export default function Home() {
    const [response, setResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [lastQuestion, setLastQuestion] = useState<string>('');
    const [lastAge, setLastAge] = useState<string>('');

    const handleSubmit = async (age: string, question: string) => {
        setIsLoading(true);
        setResponse('');
        setLastAge(age);
        setLastQuestion(question);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ age, question }),
            });

            if (!res.ok) {
                throw new Error('Failed to get response');
            }

            const reader = res.body?.getReader();
            const decoder = new TextDecoder();

            if (reader) {
                let fullResponse = '';
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value, { stream: true });
                    fullResponse += chunk;
                    setResponse(fullResponse);
                }
            }
        } catch (error) {
            console.error('Error:', error);
            setResponse(
                'I apologize, but I\'m having trouble connecting right now. Please try again in a moment. Remember, patience is something we practice alongside our little ones.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setResponse('');
        setLastQuestion('');
        setLastAge('');
    };

    const handleEmailAdvice = () => {
        setShowEmailModal(true);
    };

    return (
        <main className="flex-1 flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="relative px-4 pt-8 pb-6 md:pt-12 md:pb-10">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest-800 mb-4 animate-fade-in">
                        Your Montessori Guide,{' '}
                        <span className="text-sage-400">Always Here</span>
                    </h1>
                    <p className="text-base md:text-lg text-forest-600 max-w-xl mx-auto animate-slide-up">
                        Ask any question about your child&apos;s development. Receive observant,
                        warm guidance rooted in the Montessori philosophy.
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-sage-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-20 right-0 w-40 h-40 bg-terracotta-400/5 rounded-full blur-3xl translate-x-1/2" />
            </section>

            {/* Main Content */}
            <section className="flex-1 px-4 pb-12">
                <div className="max-w-2xl mx-auto">
                    {!response && !isLoading ? (
                        <div className="animate-fade-in">
                            <GuideForm onSubmit={handleSubmit} isLoading={isLoading} />
                        </div>
                    ) : (
                        <ResponseDisplay
                            response={response}
                            isLoading={isLoading}
                            onReset={handleReset}
                            onEmailAdvice={handleEmailAdvice}
                        />
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="px-4 py-6 border-t border-sand-200">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-sm text-forest-500">
                        <span className="font-serif italic">Little Sapling Studio</span> — Rooted in Play, Grown in Purpose.
                    </p>
                </div>
            </footer>

            {/* Email Modal */}
            <EmailCaptureModal
                isOpen={showEmailModal}
                onClose={() => setShowEmailModal(false)}
                advice={response}
                question={lastQuestion}
                age={lastAge}
            />
        </main>
    );
}
