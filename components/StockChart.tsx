export default function StockChart({ isPositive }: { isPositive: boolean }) {
    // Simple simulated SVG chart path
    const color = isPositive ? '#00c805' : '#ff3b30';
    const gradientId = isPositive ? 'gradientGreen' : 'gradientRed';

    // Random-ish looking path
    const pathData = isPositive
        ? "M0,80 C20,75 40,85 60,60 C80,40 100,50 120,30 C140,20 160,35 180,15 C200,5 220,10 240,2"
        : "M0,20 C20,25 40,15 60,40 C80,60 100,50 120,70 C140,80 160,65 180,85 C200,95 220,90 240,98";

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 240 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path
                    d={pathData}
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <path
                    d={`${pathData} L240,100 L0,100 Z`}
                    fill={`url(#${gradientId})`}
                    stroke="none"
                />
            </svg>
        </div>
    );
}
