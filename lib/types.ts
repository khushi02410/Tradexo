export interface Stock {
    ticker: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    marketCap: number;
    volume: number;
    peRatio: number;
    dividendYield: number;
    low52: number;
    high52: number;
    description: string;
    sector: string;
    industry: string;
    exchange: string;
    logoUrl?: string;
    website?: string;
}

export interface SEOMetadata {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
    canonical: string;
}

export interface JSONLDSchema {
    '@context': string;
    '@type': string;
    [key: string]: any;
}
