'use client';

import { useState } from 'react';

interface GuideFormProps {
    onSubmit: (age: string, question: string) => void;
    isLoading: boolean;
}

export default function GuideForm({ onSubmit, isLoading }: GuideFormProps) {
    const [age, setAge] = useState('');
    const [question, setQuestion] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (age.trim() && question.trim()) {
            onSubmit(age, question);
        }
    };

    const exampleQuestions = [
        "Help me set up a prepared environment for my toddler",
        "My child keeps throwing food at meals. What should I do?",
        "How can I encourage independent dressing?",
        "What activities support language development?",
    ];

    const handleExampleClick = (example: string) => {
        setQuestion(example);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="card-elevated space-y-6">
                {/* Age Input */}
                <div className="space-y-2">
                    <label htmlFor="age" className="block text-sm font-medium text-forest-700">
                        Child&apos;s Age
                    </label>
                    <input
                        type="text"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="e.g., 12 weeks, 18 months, 3 years"
                        className="input-field"
                        disabled={isLoading}
                        required
                    />
                    <p className="text-xs text-forest-500">
                        You can write any format — weeks, months, or years
                    </p>
                </div>

                {/* Question Input */}
                <div className="space-y-2">
                    <label htmlFor="question" className="block text-sm font-medium text-forest-700">
                        Your Question
                    </label>
                    <textarea
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="What would you like guidance on today?"
                        rows={4}
                        className="input-field resize-none"
                        disabled={isLoading}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading || !age.trim() || !question.trim()}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Ask the Guide
                </button>
            </div>

            {/* Example Questions */}
            <div className="space-y-3">
                <p className="text-sm text-center text-forest-500 font-medium">
                    Or try one of these:
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {exampleQuestions.map((example, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleExampleClick(example)}
                            className="text-xs md:text-sm px-3 py-2 rounded-full bg-white border border-sand-200 
                         text-forest-600 hover:border-sage-400 hover:text-sage-500 
                         transition-all duration-200"
                        >
                            {example}
                        </button>
                    ))}
                </div>
            </div>
        </form>
    );
}
