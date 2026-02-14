import Link from 'next/link';

interface BreadcrumbsProps {
    items: Array<{
        label: string;
        href: string;
    }>;
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            style={{
                marginBottom: '2rem',
                fontSize: '0.875rem'
            }}
        >
            <ol style={{
                display: 'flex',
                gap: '0.5rem',
                listStyle: 'none',
                flexWrap: 'wrap'
            }}>
                {items.map((item, index) => (
                    <li key={item.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {index > 0 && (
                            <span style={{ color: 'var(--color-text-tertiary)' }}>→</span>
                        )}
                        {index === items.length - 1 ? (
                            <span
                                style={{ color: 'var(--color-text-primary)' }}
                                aria-current="page"
                            >
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                style={{
                                    color: 'var(--color-text-secondary)',
                                    transition: 'color var(--transition-fast)'
                                }}
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
