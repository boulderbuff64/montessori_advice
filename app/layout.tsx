import type { Metadata } from 'next';
import { Lora, Open_Sans } from 'next/font/google';
import './globals.css';

const lora = Lora({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lora',
    weight: ['400', '500', '600', '700'],
});

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open-sans',
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Little Sapling Studio | AI Montessori Guide',
    description:
        'Your digital Montessori mentor. Get personalized, warm advice on creating a prepared environment where your child can thrive.',
    keywords: [
        'Montessori',
        'parenting',
        'child development',
        'prepared environment',
        'toddler',
        'infant',
        'education',
    ],
    authors: [{ name: 'Little Sapling Studio' }],
    openGraph: {
        title: 'Little Sapling Studio | AI Montessori Guide',
        description:
            'Your digital Montessori mentor. Get personalized advice grounded in the principles of Maria Montessori.',
        type: 'website',
        locale: 'en_US',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${lora.variable} ${openSans.variable}`}>
            <body className="min-h-screen flex flex-col">
                {children}
            </body>
        </html>
    );
}
