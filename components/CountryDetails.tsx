import { Country } from '@/lib/types';
import { formatPopulation, formatArea } from '@/lib/api';

interface CountryDetailsProps {
    country: Country;
}

export default function CountryDetails({ country }: CountryDetailsProps) {
    const languages = country.languages
        ? Object.values(country.languages).join(', ')
        : 'N/A';

    const currencies = country.currencies
        ? Object.entries(country.currencies)
            .map(([code, curr]) => `${curr.name} (${curr.symbol || code})`)
            .join(', ')
        : 'N/A';

    const timezones = country.timezones?.join(', ') || 'N/A';
    const borders = country.borders?.join(', ') || 'None';

    return (
        <div style={{ marginTop: '2rem' }}>
            {/* Geography Section */}
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{
                    fontSize: '1.75rem',
                    marginBottom: '1.5rem',
                    color: 'var(--color-text-primary)'
                }}>
                    🗺️ Geography
                </h2>

                <div className="stat-grid">
                    <div className="stat-card">
                        <div className="stat-value">{formatArea(country.area)}</div>
                        <div className="stat-label">Area (km²)</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-value">{country.region}</div>
                        <div className="stat-label">Region</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-value">{country.subregion || 'N/A'}</div>
                        <div className="stat-label">Subregion</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-value">{country.landlocked ? 'Yes' : 'No'}</div>
                        <div className="stat-label">Landlocked</div>
                    </div>
                </div>

                <div className="card" style={{ marginTop: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Location Details</h3>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <div>
                            <strong style={{ color: 'var(--color-text-secondary)' }}>Coordinates:</strong>{' '}
                            <span style={{ color: 'var(--color-text-primary)' }}>
                                {country.latlng[0]}°, {country.latlng[1]}°
                            </span>
                        </div>
                        <div>
                            <strong style={{ color: 'var(--color-text-secondary)' }}>Continents:</strong>{' '}
                            <span style={{ color: 'var(--color-text-primary)' }}>
                                {country.continents?.join(', ') || 'N/A'}
                            </span>
                        </div>
                        <div>
                            <strong style={{ color: 'var(--color-text-secondary)' }}>Bordering Countries:</strong>{' '}
                            <span style={{ color: 'var(--color-text-primary)' }}>{borders}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demographics Section */}
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{
                    fontSize: '1.75rem',
                    marginBottom: '1.5rem',
                    color: 'var(--color-text-primary)'
                }}>
                    👥 Demographics
                </h2>

                <div className="stat-grid">
                    <div className="stat-card">
                        <div className="stat-value">{formatPopulation(country.population)}</div>
                        <div className="stat-label">Population</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-value">
                            {country.capital?.[0] || 'N/A'}
                        </div>
                        <div className="stat-label">Capital</div>
                    </div>
                </div>
            </section>

            {/* Culture & Society Section */}
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{
                    fontSize: '1.75rem',
                    marginBottom: '1.5rem',
                    color: 'var(--color-text-primary)'
                }}>
                    🌐 Culture & Society
                </h2>

                <div className="card">
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <div>
                            <h3 style={{
                                fontSize: '1rem',
                                color: 'var(--color-text-secondary)',
                                marginBottom: '0.5rem'
                            }}>
                                Languages
                            </h3>
                            <p style={{ color: 'var(--color-text-primary)', marginBottom: 0 }}>
                                {languages}
                            </p>
                        </div>

                        <div>
                            <h3 style={{
                                fontSize: '1rem',
                                color: 'var(--color-text-secondary)',
                                marginBottom: '0.5rem'
                            }}>
                                Currencies
                            </h3>
                            <p style={{ color: 'var(--color-text-primary)', marginBottom: 0 }}>
                                {currencies}
                            </p>
                        </div>

                        <div>
                            <h3 style={{
                                fontSize: '1rem',
                                color: 'var(--color-text-secondary)',
                                marginBottom: '0.5rem'
                            }}>
                                Timezones
                            </h3>
                            <p style={{ color: 'var(--color-text-primary)', marginBottom: 0 }}>
                                {timezones}
                            </p>
                        </div>

                        {country.idd && (
                            <div>
                                <h3 style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '0.5rem'
                                }}>
                                    Calling Code
                                </h3>
                                <p style={{ color: 'var(--color-text-primary)', marginBottom: 0 }}>
                                    {country.idd.root}{country.idd.suffixes?.[0] || ''}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section>
                <h2 style={{
                    fontSize: '1.75rem',
                    marginBottom: '1.5rem',
                    color: 'var(--color-text-primary)'
                }}>
                    ℹ️ Additional Information
                </h2>

                <div className="card">
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <div>
                            <strong style={{ color: 'var(--color-text-secondary)' }}>Official Name:</strong>{' '}
                            <span style={{ color: 'var(--color-text-primary)' }}>
                                {country.name.official}
                            </span>
                        </div>
                        <div>
                            <strong style={{ color: 'var(--color-text-secondary)' }}>UN Member:</strong>{' '}
                            <span style={{ color: 'var(--color-text-primary)' }}>
                                {country.unMember ? 'Yes' : 'No'}
                            </span>
                        </div>
                        <div>
                            <strong style={{ color: 'var(--color-text-secondary)' }}>Independent:</strong>{' '}
                            <span style={{ color: 'var(--color-text-primary)' }}>
                                {country.independent ? 'Yes' : 'No'}
                            </span>
                        </div>
                        <div>
                            <strong style={{ color: 'var(--color-text-secondary)' }}>Start of Week:</strong>{' '}
                            <span style={{ color: 'var(--color-text-primary)' }}>
                                {country.startOfWeek}
                            </span>
                        </div>
                        {country.tld && (
                            <div>
                                <strong style={{ color: 'var(--color-text-secondary)' }}>Internet TLD:</strong>{' '}
                                <span style={{ color: 'var(--color-text-primary)' }}>
                                    {country.tld.join(', ')}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
