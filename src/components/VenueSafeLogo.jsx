export default function VenueSafeLogo({ width = 260, className = '' }) {
  // Compact horizontal layout — text-dominant, matches nav button height
  const viewBoxWidth = 520;
  const viewBoxHeight = 80;
  const scale = width / viewBoxWidth;
  const scaledHeight = viewBoxHeight * scale;

  return (
    <svg
      width={width}
      height={scaledHeight}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      <defs>
        <filter id="vsRedGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="vsCyanGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <style>{`
          .vs-shield {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: vs-drawShield 1.5s ease forwards, vs-redPulse 2s ease-in-out infinite 1.5s;
          }

          .vs-pulse {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: vs-drawPulse 1.2s ease forwards 0.8s, vs-pulseGlow 1.2s ease-in-out infinite 2s;
          }

          .vs-venue {
            opacity: 0;
            animation: vs-fadeIn 0.6s ease forwards 1.2s;
          }

          .vs-safe {
            opacity: 0;
            animation: vs-fadeIn 0.6s ease forwards 1.5s, vs-redPulse 2s ease-in-out infinite 2s;
          }

          .vs-line {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: vs-drawLine 0.8s ease forwards 1.8s;
          }

          .vs-tagline {
            opacity: 0;
            animation: vs-fadeIn 0.6s ease forwards 2.2s, vs-cyanPulse 2s ease-in-out infinite 2.8s;
          }

          .vs-scan {
            animation: vs-scanMove 2.8s linear infinite;
          }

          @keyframes vs-drawShield {
            to { stroke-dashoffset: 0; }
          }

          @keyframes vs-drawPulse {
            to { stroke-dashoffset: 0; }
          }

          @keyframes vs-drawLine {
            to { stroke-dashoffset: 0; }
          }

          @keyframes vs-fadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes vs-redPulse {
            0%, 100% { filter: drop-shadow(0 0 3px #ff0040); }
            50% { filter: drop-shadow(0 0 10px #ff0040); }
          }

          @keyframes vs-cyanPulse {
            0%, 100% { filter: drop-shadow(0 0 3px #00f0ff); }
            50% { filter: drop-shadow(0 0 10px #00f0ff); }
          }

          @keyframes vs-pulseGlow {
            0%, 100% { stroke-width: 2.5; }
            50% { stroke-width: 4; }
          }

          @keyframes vs-scanMove {
            0% { transform: translateX(80px); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateX(500px); opacity: 0; }
          }
        `}</style>
      </defs>

      {/* Shield icon — compact, left-aligned */}
      <path
        className="vs-shield"
        d="M32 6 L56 14 L56 36 C56 52 45 62 32 68 C19 62 8 52 8 36 L8 14 Z"
        stroke="#FF0040"
        strokeWidth="2.5"
        fill="rgba(255,0,64,0.08)"
        filter="url(#vsRedGlow)"
      />

      {/* Heartbeat pulse inside shield */}
      <polyline
        className="vs-pulse"
        points="16,38 24,38 28,28 36,50 40,38 50,38"
        stroke="#FF0040"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#vsRedGlow)"
      />

      {/* Expanding ring */}
      <circle cx="32" cy="38" r="26" stroke="#FF0040" strokeWidth="0.8" opacity="0.15">
        <animate attributeName="r" values="22;30;22" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.25;0.03;0.25" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* VENUE — bold, adapts to theme */}
      <text
        className="vs-venue"
        x="72"
        y="42"
        fontFamily="Orbitron, Arial, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="5"
        fill="currentColor"
        style={{ color: 'var(--text-primary)' }}
      >
        VENUE
      </text>

      {/* SAFE — bold red, tighter gap */}
      <text
        className="vs-safe"
        x="260"
        y="42"
        fontFamily="Orbitron, Arial, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="5"
        fill="#FF0040"
      >
        SAFE
      </text>

      {/* Cyan underline */}
      <line
        className="vs-line"
        x1="72"
        y1="54"
        x2="430"
        y2="54"
        stroke="#00F0FF"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Scanning rectangle */}
      <rect
        className="vs-scan"
        x="0"
        y="50"
        width="24"
        height="8"
        fill="#00F0FF"
        opacity="0.2"
        filter="url(#vsCyanGlow)"
      />

      {/* Tagline — small beneath */}
      <text
        className="vs-tagline"
        x="72"
        y="72"
        fontFamily="Orbitron, Arial, sans-serif"
        fontSize="10"
        fontWeight="500"
        letterSpacing="3"
        fill="#00F0FF"
      >
        COMMAND SYSTEM v2.0
      </text>
    </svg>
  );
}
