import { MetadataRoute } from 'next';
import { getAllStocks } from '@/lib/api';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const stocks = await getAllStocks();

    const stockEntries: MetadataRoute.Sitemap = stocks.map((stock) => ({
        url: `${BASE_URL}/stock/${stock.ticker}`,
        lastModified: new Date(),
        changeFrequency: 'always',
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        ...stockEntries,
    ];
}
