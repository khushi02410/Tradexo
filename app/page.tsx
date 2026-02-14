import { getAllStocks, getTopMovers } from '@/lib/api';
import StockCard from '@/components/StockCard';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
    const stocks = await getAllStocks();
    const topMovers = await getTopMovers();

    return (
        <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            {/* Market Header */}
            <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #00c805, #0088cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Tradexo
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
                    Real-time insights for the modern investor. Track {stocks.length} top global companies.
                </p>
            </section>

            {/* Top Movers */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Top Movers
                </h2>
                <div className="grid grid-auto">
                    {topMovers.map(stock => (
                        <StockCard key={stock.ticker} stock={stock} />
                    ))}
                </div>
            </section>

            {/* All Stocks Table/Grid */}
            <section>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Market Overview</h2>
                <div className="grid grid-auto">
                    {stocks.map(stock => (
                        <StockCard key={stock.ticker} stock={stock} />
                    ))}
                </div>
            </section>
        </div>
    );
}
