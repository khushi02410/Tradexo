import { Stock, SEOMetadata, JSONLDSchema } from './types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const SITE_NAME = 'Tradexo';

/**
 * Generate SEO metadata for a stock page
 */
export function generateStockSEO(stock: Stock): SEOMetadata {
    return {
        title: `${stock.ticker} Stock Price, News & Analysis - ${stock.name}`,
        description: `Track ${stock.name} (${stock.ticker}) stock price, financials, and market news. Real-time analysis, volume, and market cap data for investors.`,
        keywords: [
            stock.ticker,
            `${stock.ticker} stock`,
            `${stock.name} price`,
            'stock market',
            'financial data',
            'investing',
            stock.sector
        ],
        canonical: `${SITE_URL}/stock/${stock.ticker}`,
    };
}

/**
 * Generate homepage SEO
 */
export function generateHomeSEO(): SEOMetadata {
    return {
        title: `${SITE_NAME} - Real-time Stock Market Data & Analysis`,
        description: 'Free comprehensive stock market data, company pages, and financial analysis. Track top gainers, losers, and market trends instantly.',
        keywords: ['stock market', 'finance', 'investing', 'market data', 'stock analysis'],
        canonical: SITE_URL,
    };
}

/**
 * Generate FinancialProduct Schema
 */
export function generateStockSchema(stock: Stock): JSONLDSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'FinancialProduct',
        name: stock.name,
        tickerSymbol: stock.ticker,
        exchange: stock.exchange,
        description: stock.description,
        currency: 'USD',
        price: stock.price.toString(),
        priceChange: stock.change.toString(),
        priceChangePercent: stock.changePercent.toString(),
    };
}

/**
 * Generate Organization Schema
 */
export function generateOrganizationSchema(): JSONLDSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: 'Financial market data and analysis platform',
    };
}
