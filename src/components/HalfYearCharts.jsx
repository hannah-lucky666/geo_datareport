import React from 'react';

export const MONTHS = ['1月', '2月', '3月', '4月', '5月', '6月'];

/* =========================================================================
 * BumpChart —— 半年竞争位次演变（排名越靠上越好）
 * brands: [{ name, ranks:[6个1..N], color, highlight }]
 * ========================================================================= */
export function BumpChart({ brands, months = MONTHS }) {
  const N = months.length;
  const maxRank = Math.max(...brands.flatMap((b) => b.ranks));
  const VB_W = 900, VB_H = 380;
  const PAD = { top: 30, right: 80, bottom: 34, left: 80 };
  const plotW = VB_W - PAD.left - PAD.right;
  const plotH = VB_H - PAD.top - PAD.bottom;
  const x = (i) => PAD.left + (i / (N - 1)) * plotW;
  const y = (rank) => PAD.top + ((rank - 1) / (maxRank - 1)) * plotH;

  const path = (ranks) =>
    ranks.map((r, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(r).toFixed(1)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="xMidYMid meet" className="w-full h-full overflow-visible" style={{ overflow: 'visible' }}>
      {/* rank gridlines */}
      {Array.from({ length: maxRank }, (_, k) => k + 1).map((r) => (
        <g key={r}>
          <line x1={PAD.left} y1={y(r)} x2={PAD.left + plotW} y2={y(r)} stroke="#eef1f5" strokeWidth="1.5" />
          <text x={PAD.left - 14} y={y(r) + 6} textAnchor="end" className="fill-zinc-300"
            style={{ fontSize: '16px', fontWeight: 900, fontFamily: 'Montserrat, sans-serif' }}>
            NO.{r}
          </text>
        </g>
      ))}
      {/* x labels */}
      {months.map((m, i) => (
        <text key={m} x={x(i)} y={PAD.top + plotH + 26} textAnchor="middle"
          className={i === 0 ? 'fill-zinc-500' : 'fill-zinc-400'} style={{ fontSize: '16px', fontWeight: 800 }}>
          {m}
        </text>
      ))}

      {brands.map((b) => {
        const startR = b.ranks[0], endR = b.ranks[N - 1];
        return (
          <g key={b.name}>
            <path d={path(b.ranks)} fill="none" stroke={b.color}
              strokeWidth={b.highlight ? 6 : 3} strokeLinecap="round" strokeLinejoin="round"
              opacity={b.highlight ? 1 : 0.55} />
            {/* right label */}
            <text x={x(N - 1) + 20} y={y(endR) + 6} textAnchor="start"
              className={b.highlight ? '' : 'fill-zinc-400'}
              fill={b.highlight ? b.color : undefined}
              style={{ fontSize: b.highlight ? '19px' : '16px', fontWeight: b.highlight ? 900 : 700 }}>
              {b.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* =========================================================================
 * MonthlyBars —— 月度柱状（投放引用节奏 / 正面率走势等）
 * HTML/flex 实现，避免 SVG 非等比缩放导致文字变形
 * ========================================================================= */
export function MonthlyBars({ values, months = MONTHS, color = '#004CE5', max, unit = '',
  fmt = (v) => v }) {
  const hi = max ?? Math.max(...values) * 1.15;

  return (
    <div className="w-full h-full flex flex-col pt-2">
      {/* bars */}
      <div className="flex-1 flex items-end justify-between gap-3 min-h-0">
        {values.map((v, i) => (
          <div key={i} className="flex-1 h-full flex flex-col items-center justify-end">
            <span className="mb-1.5 font-black font-['Montserrat',sans-serif] leading-none"
              style={{ fontSize: '1.05rem', color }}>
              {fmt(v)}{unit}
            </span>
            <div className="w-[62%] rounded-t-lg"
              style={{
                height: `${Math.max((v / hi) * 100, 2)}%`,
                background: `linear-gradient(to bottom, ${color}, ${color}99)`,
              }} />
          </div>
        ))}
      </div>
      {/* month labels */}
      <div className="flex justify-between gap-3 pt-2 border-t border-zinc-100 mt-1">
        {months.map((m, i) => (
          <span key={i} className="flex-1 text-center font-bold text-zinc-400" style={{ fontSize: '0.9rem' }}>{m}</span>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
 * WeeklyComplianceBoard —— 半年逐周 KPI 达标看板
 * data: [{ label:'1月', weeks:4, hit:4, keywords:10 }, ...]
 * ========================================================================= */
export function WeeklyComplianceBoard({ data, total = 15 }) {
  return (
    <div className="grid grid-cols-6 gap-4 h-full">
      {data.map((m, i) => {
        const allHit = m.hit >= m.weeks;
        return (
          <div key={i} className="flex flex-col rounded-2xl border border-zinc-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)] overflow-hidden">
            {/* month header */}
            <div className="bg-slate-50 border-b border-zinc-200 px-3 py-3.5 text-center shrink-0">
              <p className="text-xl font-black text-zinc-800">{m.label}</p>
            </div>
            {/* week cells */}
            <div className="flex-1 flex flex-col gap-2 px-3 py-3">
              {Array.from({ length: m.weeks }, (_, w) => (
                <div key={w}
                  className="flex-1 flex items-center justify-between rounded-lg bg-emerald-50 border border-emerald-500/20 px-3 py-2">
                  <span className="text-[1.15rem] font-bold text-zinc-500 font-['Montserrat',sans-serif]">W{w + 1}</span>
                  <span className="flex items-center gap-1 text-[1.15rem] font-black text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    达标
                  </span>
                </div>
              ))}
            </div>
            {/* footer status */}
            <div className={`shrink-0 text-center py-1.5 text-[0.9rem] font-black ${allHit ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>
              {m.hit}/{m.weeks} 周达标
            </div>
          </div>
        );
      })}
    </div>
  );
}
