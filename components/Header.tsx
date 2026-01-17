import Link from 'next/link';

export default function Header() {
    return (
        <header className="px-4 py-4 md:py-6 border-b border-sand-200/50 bg-sand-100/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Sapling Icon */}
                    <div className="relative w-10 h-10 md:w-12 md:h-12">
                        <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                        >
                            {/* Pot */}
                            <path
                                d="M16 38 L32 38 L30 44 L18 44 Z"
                                fill="#C06C4C"
                                className="transition-colors group-hover:fill-terracotta-500"
                            />
                            <path
                                d="M14 36 L34 36 L32 38 L16 38 Z"
                                fill="#994930"
                            />

                            {/* Stem */}
                            <path
                                d="M24 36 L24 22"
                                stroke="#728C69"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="transition-colors group-hover:stroke-sage-500"
                            />

                            {/* Main Leaf */}
                            <ellipse
                                cx="24"
                                cy="14"
                                rx="8"
                                ry="10"
                                fill="#728C69"
                                className="transition-all group-hover:fill-sage-500 origin-bottom"
                            />

                            {/* Left Small Leaf */}
                            <ellipse
                                cx="17"
                                cy="24"
                                rx="4"
                                ry="6"
                                fill="#728C69"
                                transform="rotate(-30 17 24)"
                                className="transition-colors group-hover:fill-sage-500"
                            />

                            {/* Right Small Leaf */}
                            <ellipse
                                cx="31"
                                cy="24"
                                rx="4"
                                ry="6"
                                fill="#728C69"
                                transform="rotate(30 31 24)"
                                className="transition-colors group-hover:fill-sage-500"
                            />

                            {/* Leaf vein details */}
                            <path
                                d="M24 8 L24 20"
                                stroke="#5a7352"
                                strokeWidth="1"
                                strokeLinecap="round"
                                opacity="0.5"
                            />
                        </svg>
                    </div>

                    {/* Brand Name */}
                    <div className="flex flex-col">
                        <span className="font-serif text-lg md:text-xl font-semibold text-forest-800 leading-tight">
                            Little Sapling
                        </span>
                        <span className="text-xs md:text-sm text-sage-400 font-medium tracking-wider uppercase">
                            Studio
                        </span>
                    </div>
                </Link>

                {/* Tagline - Hidden on mobile */}
                <div className="hidden md:block">
                    <p className="text-sm text-forest-500 font-serif italic">
                        Rooted in Play, Grown in Purpose
                    </p>
                </div>
            </div>
        </header>
    );
}
