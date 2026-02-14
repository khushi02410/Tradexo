import Link from 'next/link';
import { Country } from '@/lib/types';
import { createSlug, formatPopulation } from '@/lib/api';

interface CountryCardProps {
    country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
    const slug = createSlug(country.name.common);
    const capital = country.capital?.[0] || 'N/A';
    const population = formatPopulation(country.population);

    return (
        <Link href={`/country/${slug}`} className="card fade-in" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                    fontSize: '3rem',
                    lineHeight: 1,
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}>
                    {country.flag}
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        marginBottom: '0.25rem',
                        color: 'var(--color-text-primary)'
                    }}>
                        {country.name.common}
                    </h3>
                    <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-text-tertiary)',
                        marginBottom: 0
                    }}>
                        {country.name.official}
                    </p>
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                marginTop: '1rem'
            }}>
                <div>
                    <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-tertiary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.25rem'
                    }}>
                        Capital
                    </div>
                    <div style={{
                        fontWeight: 600,
                        color: 'var(--color-text-secondary)'
                    }}>
                        {capital}
                    </div>
                </div>

                <div>
                    <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-tertiary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.25rem'
                    }}>
                        Region
                    </div>
                    <div style={{
                        fontWeight: 600,
                        color: 'var(--color-text-secondary)'
                    }}>
                        {country.region}
                    </div>
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                    <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-tertiary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.25rem'
                    }}>
                        Population
                    </div>
                    <div style={{
                        fontWeight: 600,
                        color: 'var(--color-accent-primary)'
                    }}>
                        {population}
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <span className="badge">{country.subregion || country.region}</span>
            </div>
        </Link>
    );
}
