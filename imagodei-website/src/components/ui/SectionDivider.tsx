export function SectionDivider() {
  return (
    <div
      className="relative w-full h-32 overflow-hidden"
      style={{ backgroundColor: '#1A3A3A' }}
    >
      {/* Gradient fade from hero to section */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(15, 31, 42, 0.5) 0%, transparent 100%)',
        }}
      />

      {/* Decorative waves */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A4A4A" stopOpacity="0" />
            <stop offset="30%" stopColor="#F5B82E" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#FFCB45" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#F5B82E" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2A4A4A" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M 0 80 Q 300 40, 600 80 Q 900 120, 1200 80 L 1200 100 L 0 100 Z"
          fill="url(#dividerGradient)"
        />
        <path
          d="M 0 60 Q 400 100, 600 60 Q 800 20, 1200 60"
          stroke="#F5B82E"
          strokeWidth="0.5"
          fill="none"
          opacity="0.1"
        />
        <path
          d="M 0 70 Q 300 30, 600 70 Q 900 110, 1200 70"
          stroke="#3A5A5A"
          strokeWidth="0.5"
          fill="none"
          opacity="0.15"
        />
      </svg>

      {/* Center decorative element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
          <path
            d="M 5 35 Q 40 5, 75 35"
            stroke="#F5B82E"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
          />
          <path
            d="M 15 35 Q 40 10, 65 35"
            stroke="#FFCB45"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            fill="none"
          />
          <circle
            cx="40"
            cy="20"
            r="4"
            fill="#F5B82E"
            fillOpacity="0.3"
          />
          <circle
            cx="40"
            cy="20"
            r="2"
            fill="#F5B82E"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </div>
  )
}
