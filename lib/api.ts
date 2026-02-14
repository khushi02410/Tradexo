import { Stock } from './types';

// Mock Data Generator
const SECTORS = ['Technology', 'Healthcare', 'Finance', 'Consumer Cyclical', 'Energy', 'Industrial'];
const EXCHANGES = ['NASDAQ', 'NYSE'];

const COMPANIES = [
    { ticker: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: 175.50 },
    { ticker: 'MSFT', name: 'Microsoft Corp.', sector: 'Technology', price: 380.20 },
    { ticker: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', price: 140.10 },
    { ticker: 'AMZN', name: 'Amazon.com Inc.', sector: 'Consumer Cyclical', price: 155.30 },
    { ticker: 'NVDA', name: 'NVIDIA Corp.', sector: 'Technology', price: 720.50 },
    { ticker: 'META', name: 'Meta Platforms Inc.', sector: 'Technology', price: 470.80 },
    { ticker: 'TSLA', name: 'Tesla Inc.', sector: 'Consumer Cyclical', price: 190.40 },
    { ticker: 'BRK.B', name: 'Berkshire Hathaway', sector: 'Finance', price: 410.20 },
    { ticker: 'LLY', name: 'Eli Lilly and Co.', sector: 'Healthcare', price: 750.10 },
    { ticker: 'V', name: 'Visa Inc.', sector: 'Finance', price: 280.50 },
    { ticker: 'JPM', name: 'JPMorgan Chase', sector: 'Finance', price: 175.80 },
    { ticker: 'WMT', name: 'Walmart Inc.', sector: 'Consumer Defensive', price: 170.30 },
    { ticker: 'XOM', name: 'Exxon Mobil Corp.', sector: 'Energy', price: 102.50 },
    { ticker: 'UNH', name: 'UnitedHealth Group', sector: 'Healthcare', price: 515.20 },
    { ticker: 'MA', name: 'Mastercard Inc.', sector: 'Finance', price: 460.10 },
    { ticker: 'PG', name: 'Procter & Gamble', sector: 'Consumer Defensive', price: 160.40 },
    { ticker: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', price: 158.20 },
    { ticker: 'HD', name: 'Home Depot Inc.', sector: 'Consumer Cyclical', price: 360.50 },
    { ticker: 'MRK', name: 'Merck & Co.', sector: 'Healthcare', price: 125.80 },
    { ticker: 'ABBV', name: 'AbbVie Inc.', sector: 'Healthcare', price: 175.30 },
    { ticker: 'CVX', name: 'Chevron Corp.', sector: 'Energy', price: 150.20 },
    { ticker: 'KO', name: 'Coca-Cola Co.', sector: 'Consumer Defensive', price: 60.10 },
    { ticker: 'PEP', name: 'PepsiCo Inc.', sector: 'Consumer Defensive', price: 168.50 },
    { ticker: 'COST', name: 'Costco Wholesale', sector: 'Consumer Defensive', price: 740.20 },
    { ticker: 'ADBE', name: 'Adobe Inc.', sector: 'Technology', price: 550.40 },
];

/**
 * Generate a realistic-looking stock object with some random variation
 */
function generateStockData(base: { ticker: string, name: string, sector: string, price: number }): Stock {
    const variation = (Math.random() * 4) - 2; // -2% to +2%
    const price = base.price * (1 + (variation / 1000)); // Slight random pricing on build
    const changePercent = (Math.random() * 5) - 2.5; // -2.5% to +2.5%
    const change = price * (changePercent / 100);

    return {
        ticker: base.ticker,
        name: base.name,
        price: price,
        change: change,
        changePercent: changePercent,
        marketCap: price * (50000000 + Math.random() * 500000000), // Random large market cap
        volume: 1000000 + Math.random() * 20000000,
        peRatio: 15 + Math.random() * 40,
        dividendYield: Math.random() * 4,
        low52: price * 0.8,
        high52: price * 1.2,
        description: `${base.name} is a leading company in the ${base.sector} sector. It provides extensive services and products to a global market. Investors closely watch ${base.ticker} for its consistent performance and market dominance.`,
        sector: base.sector,
        industry: 'General',
        exchange: EXCHANGES[Math.floor(Math.random() * EXCHANGES.length)],
    };
}

/**
 * Fetch all stocks (Simulated)
 */
export async function getAllStocks(): Promise<Stock[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 50));

    const stocks = COMPANIES.map(generateStockData);

    // Sort by Market Cap desc
    return stocks.sort((a, b) => b.marketCap - a.marketCap);
}

/**
 * Fetch top movers
 */
export async function getTopMovers(): Promise<Stock[]> {
    const stocks = await getAllStocks();
    // Sort by absolute change percent
    return stocks.sort((a, b) => Math.abs(b.changePercent) - Math.abs(a.changePercent)).slice(0, 5);
}

/**
 * Fetch single stock
 */
export async function getStockByTicker(ticker: string): Promise<Stock | null> {
    const stocks = await getAllStocks(); // In real app, this would be an API call
    return stocks.find(s => s.ticker === ticker) || null;
}

/**
 * Helpers
 */
export function formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
}

export function formatLargeNumber(value: number): string {
    if (value >= 1e12) return (value / 1e12).toFixed(2) + 'T';
    if (value >= 1e9) return (value / 1e9).toFixed(2) + 'B';
    if (value >= 1e6) return (value / 1e6).toFixed(2) + 'M';
    return value.toLocaleString();
}

export function formatPercentage(value: number): string {
    return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
}
