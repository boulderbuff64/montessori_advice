'use client';

export default function SaplingLoader() {
    return (
        <div className="relative w-24 h-32 flex items-end justify-center">
            {/* Pot */}
            <div className="absolute bottom-0 w-16 h-8">
                {/* Pot rim */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-terracotta-400 rounded-t-sm" />
                {/* Pot body */}
                <div
                    className="absolute top-2 left-1 right-1 bottom-0 bg-terracotta-400 rounded-b-lg"
                    style={{
                        clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                    }}
                />
                {/* Soil */}
                <div className="absolute top-1 left-2 right-2 h-3 bg-forest-700 rounded-t-full" />
            </div>

            {/* Growing Sapling Container */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                {/* Stem */}
                <div className="relative">
                    <div
                        className="w-1 bg-sage-500 rounded-full mx-auto origin-bottom"
                        style={{
                            height: '40px',
                            animation: 'stemPulse 2s ease-in-out infinite',
                        }}
                    />

                    {/* Left Leaf */}
                    <div
                        className="absolute -left-4 top-4"
                        style={{
                            animation: 'leafSway 3s ease-in-out infinite',
                            transformOrigin: 'right center',
                        }}
                    >
                        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                            <ellipse
                                cx="8"
                                cy="12"
                                rx="7"
                                ry="11"
                                fill="#728C69"
                                transform="rotate(-20 8 12)"
                            />
                            <path
                                d="M8 4 Q8 12 10 20"
                                stroke="#5a7352"
                                strokeWidth="0.5"
                                opacity="0.5"
                            />
                        </svg>
                    </div>

                    {/* Right Leaf */}
                    <div
                        className="absolute -right-4 top-4"
                        style={{
                            animation: 'leafSway 3s ease-in-out infinite 0.5s',
                            transformOrigin: 'left center',
                        }}
                    >
                        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                            <ellipse
                                cx="8"
                                cy="12"
                                rx="7"
                                ry="11"
                                fill="#728C69"
                                transform="rotate(20 8 12)"
                            />
                            <path
                                d="M8 4 Q8 12 6 20"
                                stroke="#5a7352"
                                strokeWidth="0.5"
                                opacity="0.5"
                            />
                        </svg>
                    </div>

                    {/* Top Leaf (emerging) */}
                    <div
                        className="absolute -top-6 left-1/2 -translate-x-1/2"
                        style={{
                            animation: 'topLeafGrow 2s ease-in-out infinite',
                            transformOrigin: 'bottom center',
                        }}
                    >
                        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
                            <ellipse cx="10" cy="14" rx="9" ry="13" fill="#728C69" />
                            <path
                                d="M10 3 L10 24"
                                stroke="#5a7352"
                                strokeWidth="0.75"
                                opacity="0.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Animation keyframes */}
            <style jsx>{`
        @keyframes stemPulse {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.05);
          }
        }

        @keyframes leafSway {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        @keyframes topLeafGrow {
          0%, 100% {
            transform: translateX(-50%) scale(1);
          }
          50% {
            transform: translateX(-50%) scale(1.08);
          }
        }
      `}</style>
        </div>
    );
}
