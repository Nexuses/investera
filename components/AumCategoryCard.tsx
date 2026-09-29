// Floating card showing one AUM category from the Consolidated Dashboard.

const ICONS = {
  // Rising bars with a trend arrow and a coin stack.
  markets: (
    <>
      <rect x="18" y="62" width="9" height="16" rx="2" />
      <rect x="31" y="52" width="9" height="26" rx="2" />
      <rect x="44" y="56" width="9" height="22" rx="2" />
      <rect x="57" y="44" width="9" height="34" rx="2" />
      <path
        d="M18 55 L34 40 L44 47 L62 27"
        fill="none"
        stroke="url(#aum-icon)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M53 25 L65 23 L63 35 Z" />
      <ellipse cx="72" cy="60" rx="11" ry="4.5" />
      <rect x="61" y="60" width="22" height="7" />
      <ellipse cx="72" cy="67" rx="11" ry="4.5" />
      <rect x="61" y="67" width="22" height="7" />
      <ellipse cx="72" cy="74" rx="11" ry="4.5" />
    </>
  ),
  // Three ascending bars.
  equity: (
    <>
      <rect x="27" y="56" width="12" height="22" rx="3" />
      <rect x="44" y="45" width="12" height="33" rx="3" />
      <rect x="61" y="32" width="12" height="46" rx="3" />
    </>
  ),
};

const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function AumCategoryCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: keyof typeof ICONS;
}) {
  return (
    <div className="@container w-full">
      <div className="flex items-center gap-[6cqw] rounded-[6cqw] border border-white/15 bg-[#0B1220]/95 px-[6cqw] py-[7cqw] shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <svg viewBox="0 0 100 100" aria-hidden className="w-[26cqw] shrink-0">
          <defs>
            <linearGradient id="aum-icon" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DDD6FE" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke="#A78BFA"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${CIRCUMFERENCE * 0.2} ${CIRCUMFERENCE}`}
            transform="rotate(-90 50 50)"
            style={{ filter: "drop-shadow(0 0 3px #22D3EE)" }}
          />
          <g fill="url(#aum-icon)">{ICONS[icon]}</g>
        </svg>

        <div className="min-w-0 flex-1">
          <p className="text-[5.4cqw] font-semibold leading-[1.2] text-white">{title}</p>
          <p className="mt-[2cqw] text-[4.4cqw] leading-tight tabular-nums text-white/70">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
