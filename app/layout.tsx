import './globals.css';
import { Inter } from 'next/font/google';
import { generateHomeSEO, generateOrganizationSchema } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

const homeSEO = generateHomeSEO();

export const metadata = {
    title: {
        default: homeSEO.title,
        template: '%s | Tradexo',
    },
    description: homeSEO.description,
    keywords: homeSEO.keywords,
    authors: [{ name: 'Tradexo' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: homeSEO.canonical,
        title: homeSEO.title,
        description: homeSEO.description,
        siteName: 'Tradexo',
    },
    twitter: {
        card: 'summary_large_image',
        title: homeSEO.title,
        description: homeSEO.description,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const organizationSchema = generateOrganizationSchema();

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />
            </head>
            <body className={inter.className}>
                <header className="header" style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    backdropFilter: 'blur(12px)',
                    background: 'rgba(10, 15, 20, 0.85)',
                    borderBottom: '1px solid var(--color-border)'
                }}>
                    <div className="container header-content">
                        <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgb(100, 117, 195)' }}>
                            📈 Tradexo
                        </a>
                        <nav>
                            <a href="/">Overview</a>
                        </nav>
                    </div>
                </header>
                <main>{children}</main>
                <footer style={{
                    padding: '3rem 0',
                    marginTop: '4rem',
                    borderTop: '1px solid var(--color-border)',
                    textAlign: 'center',
                    color: 'var(--color-text-tertiary)'
                }}>
                    <div className="container">
                        <p>© 2026 Tradexo. Real-time simulated market data.</p>
                        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                            For educational and demonstration purposes only. Not financial advice.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
