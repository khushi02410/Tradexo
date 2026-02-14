import { notFound } from 'next/navigation';
import { getStockByTicker, formatCurrency, formatLargeNumber, formatPercentage } from '@/lib/api';
import { generateStockSEO, generateStockSchema } from '@/lib/seo';
import StockChart from '@/components/StockChart';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

interface StockPageProps {
    params: {
        ticker: string;
    };
}

export async function generateMetadata({ params }: StockPageProps): Promise<Metadata> {
    const stock = await getStockByTicker(params.ticker);

    if (!stock) return { title: 'Stock Not Found' };

    const seo = generateStockSEO(stock);
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: 'website',
        },
    };
}

export default async function StockPage({ params }: StockPageProps) {
    const stock = await getStockByTicker(params.ticker);

    if (!stock) notFound();

    const schema = generateStockSchema(stock);
    const isPositive = stock.change >= 0;
    const color = isPositive ? '#00c805' : '#ff3b30';

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                }}
            />

            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
                <Breadcrumbs
                    items={[
                        { label: 'Market', href: '/' },
                        { label: stock.ticker, href: `/stock/${stock.ticker}` },
                    ]}
                />

                {/* Header Section */}
                <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                                <h1 style={{ fontSize: '3rem', margin: 0, lineHeight: 1 }}>{stock.ticker}</h1>
                                <span style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{stock.name}</span>
                            </div>
                            <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
                                <span className="badge">{stock.exchange}</span>
                                <span className="badge">{stock.sector}</span>
                            </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>{formatCurrency(stock.price)}</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 600, color, marginTop: '0.5rem' }}>
                                {stock.change > 0 ? '+' : ''}{formatCurrency(stock.change)} ({formatPercentage(stock.changePercent)})
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-tertiary)', marginTop: '0.5rem' }}>
                                Real-time Data • USD
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="card" style={{ marginBottom: '2rem', height: '400px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Intraday Performance</h2>
                    <div style={{ flex: 1 }}>
                        <StockChart isPositive={isPositive} />
                    </div>
                </div>

                {/* Key Stats Grid */}
                <div className="grid grid-auto" style={{ marginBottom: '2rem' }}>
                    <div className="stat-card">
                        <div className="stat-label">Market Cap</div>
                        <div className="stat-value">{formatLargeNumber(stock.marketCap)}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Volume</div>
                        <div className="stat-value">{formatLargeNumber(stock.volume)}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">P/E Ratio</div>
                        <div className="stat-value">{stock.peRatio.toFixed(2)}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Div Yield</div>
                        <div className="stat-value">{stock.dividendYield.toFixed(2)}%</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">52W High</div>
                        <div className="stat-value">{formatCurrency(stock.high52)}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">52W Low</div>
                        <div className="stat-value">{formatCurrency(stock.low52)}</div>
                    </div>
                </div>

                {/* About Section */}
                <div className="card">
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>About {stock.name}</h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
                        {stock.description}
                    </p>
                </div>
            </div>
        </>
    );
}
