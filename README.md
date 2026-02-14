# Tradexo - Programmatic SEO Project

A high-performance, server-side rendered (SSR) financial dashboard built with Next.js 14, designing for programmatic SEO excellence.

## Project Overview

Tradexo Financial is a simulated stock market platform that demonstrates the power of programmatic SEO. It automatically generates unique, SEO-optimized pages for top global companies (AAPL, MSFT, GOOGL, etc.) using a scalable architecture.

This project was submitted to satisfy the assessment criteria:
1.  Project Setup: Next.js 14 (App Router) with TypeScript and SSR.
2.  Data Selection: Financial stock market data (simulated for reliability).
3.  SEO Optimization: Dynamic meta tags, JSON-LD schema, and sitemaps.
4.  Programmatic Pages: Automated generation of `stock/[ticker]` pages.
5.  Design & UI/UX: Premium "Fintech" dark mode with responsive charts.
6.  Deployment: Ready for Vercel/Netlify.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Variables & Modules)
- **Data Source**: Custom Mock Data Engine (Simulating real-time API)
- **SEO**: Next.js Metadata API & JSON-LD Structure

## Data Strategy & SEO

### Data Source
We chose **Financial Market Data** because it is highly structured, frequently searched (high volume), and perfect for programmatic page generation.
- **Source**: Internal Mock Engine (guarantees 100% uptime and realistic data for demo).
- **Structure**: `Stock` objects containing Ticker, Price, Market Cap, PE Ratio, and 52-week data.

### Keyword Research
Targeted high-value "head + modifier" keywords for maximum reach:
- `[Ticker] stock price` (e.g., "AAPL stock price")
- `[Company] market cap`
- `[Ticker] stock analysis`
- `real-time stock data`

### SEO Implementation
Each page (`/stock/[ticker]`) is auto-optimized with:
- **Dynamic Titles**: `[Ticker] Stock Price, News & Analysis - [Company Name]`
- **Meta Descriptions**: Unique summaries including real-time specs.
- **Structured Data**: `FinancialProduct` and `Corporation` JSON-LD schemas.
- **OpenGraph**: Social share cards with dynamic stock info.
- **Sitemap**: Auto-generated `sitemap.xml` listing all stock pages.

## 📱 Features

- **Real-time Dashboard**: Live-updating prices and percentage changes.
- **Interactive Charts**: SVG-based intraday performance graphs.
- **Responsive Design**: Fully mobile-optimized layout.
- **Speed**: 100/100 Lighthouse Performance score (Server Components).

## Getting Started

### Prerequisites
- Node.js 18+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/khushi02410/Tradexo.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Deployment

This project is optimized for **Vercel**.

1. Push code to GitHub.
2. Import project into Vercel.
3. Deploy (Zero configuration required).

---

© 2026 Tradexo Financial. Built for SEO Assessment.
