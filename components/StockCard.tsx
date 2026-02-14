import Link from 'next/link';
import { Stock } from '@/lib/types';
import { formatCurrency, formatPercentage } from '@/lib/api';

interface StockCardProps {
    stock: Stock;
}

export default function StockCard({ stock }: StockCardProps) {
    const isPositive = stock.change >= 0;
    const colorClass = isPositive ? 'text-green' : 'text-red';

    return (
        <Link href={`/stock/${stock.ticker}`} className="card fade-in" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{stock.ticker}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-tertiary)', margin: 0 }}>
                        {stock.name.length > 20 ? stock.name.substring(0, 20) + '...' : stock.name}
                    </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{formatCurrency(stock.price)}</div>
                    <div style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: isPositive ? '#00c805' : '#ff3b30'
                    }}>
                        {formatPercentage(stock.changePercent)}
                    </div>
                </div>
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', display: 'flex', justifyContent: 'space-between', marginTop: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '0.5rem' }}>
                <span>{stock.sector}</span>
                <span>{stock.exchange}</span>
            </div>
        </Link>
    );
}
