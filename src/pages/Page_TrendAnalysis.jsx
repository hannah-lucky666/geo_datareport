import React from 'react';

const MONTHS = ['1月', '3月', '6月'];

// —— 半年核心指标数据（1月为服务初期优化前，3月进入稳定期，6月最新） ——
const PRODUCTS = [
  {
    name: '古井贡酒 · 古16',
    mention: [48.6, 92.0, 96.7],
    top1: [10.0, 45.0, 78.3],
    rankFrom: 4.3,
    rankTo: 1.7,
  },
  {
    name: '古井贡酒 · 古20',
    mention: [41.3, 90.5, 98.3],
    top1: [8.0, 26.0, 36.7],
    rankFrom: 6.1,
    rankTo: 4.8,
  },
];

// 图表几何参数（SVG 坐标系）
const VB_W = 820;
const VB_H = 460;
const PAD = { top: 34, right: 30, bottom: 46, left: 58 };
const PLOT_W = VB_W - PAD.left - PAD.right;
const PLOT_H = VB_H - PAD.top - PAD.bottom;

const xAt = (i, n) => PAD.left + (i / (n - 1)) * PLOT_W;
const yAt = (v) => PAD.top + (1 - v / 100) * PLOT_H;

function seriesPoints(values) {
  const n = values.length;
  return values.map((v, i) => ({ x: xAt(i, n), y: yAt(v), v }));
}

function linePath(pts) {
  return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
}

function areaPath(pts) {
  const top = linePath(pts);
  const last = pts[pts.length - 1];
  const first = pts[0];
  const base = PAD.top + PLOT_H;
  return `${top} L ${last.x.toFixed(1)} ${base} L ${first.x.toFixed(1)} ${base} Z`;
}

function TrendChart({ product, gradId }) {
  const mPts = seriesPoints(product.mention);
  const tPts = seriesPoints(product.top1);
  const lastIdx = mPts.length - 1;
  const gridVals = [0, 25, 50, 75, 100];

  const mDelta = (product.mention[product.mention.length - 1] - product.mention[0]).toFixed(1);
  const tDelta = (product.top1[product.top1.length - 1] - product.top1[0]).toFixed(1);
  const rankAdvance = (product.rankFrom - product.rankTo).toFixed(1);

  return (
    <div className="flex flex-col h-full min-h-0 rounded-2xl border border-zinc-200 bg-white shadow-[0_6px_25px_rgba(0,0,0,0.015)] p-5">
      {/* Card header */}
      <div className="flex items-start justify-between shrink-0 mb-1">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-7 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.25)]" />
          <h3 className="text-[1.7rem] font-black text-zinc-900 tracking-wide">{product.name}</h3>
        </div>
        {/* Legend */}
        <div className="flex items-center gap-4 pt-1">
          <span className="flex items-center gap-1.5 text-[0.95rem] font-bold text-zinc-600">
            <span className="w-5 h-1.5 rounded-full bg-[#004CE5]" />提及率
          </span>
          <span className="flex items-center gap-1.5 text-[0.95rem] font-bold text-zinc-600">
            <span className="w-5 h-1.5 rounded-full bg-emerald-500" />Top1提及率
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-0">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="xMidYMid meet" className="w-full h-full">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#004CE5" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#004CE5" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid + Y labels */}
          {gridVals.map((gv) => (
            <g key={gv}>
              <line
                x1={PAD.left}
                y1={yAt(gv)}
                x2={PAD.left + PLOT_W}
                y2={yAt(gv)}
                stroke="#eef1f5"
                strokeWidth="1.5"
              />
              <text
                x={PAD.left - 12}
                y={yAt(gv) + 5}
                textAnchor="end"
                className="fill-zinc-400"
                style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'Montserrat, sans-serif' }}
              >
                {gv}%
              </text>
            </g>
          ))}

          {/* X labels */}
          {MONTHS.map((m, i) => (
            <text
              key={m}
              x={xAt(i, MONTHS.length)}
              y={PAD.top + PLOT_H + 30}
              textAnchor="middle"
              className={i === 0 ? 'fill-zinc-500' : 'fill-zinc-400'}
              style={{ fontSize: '16px', fontWeight: 800 }}
            >
              {m}{i === 0 ? '·优化前' : ''}
            </text>
          ))}

          {/* Area under mention */}
          <path d={areaPath(mPts)} fill={`url(#${gradId})`} />

          {/* Top1 line */}
          <path d={linePath(tPts)} fill="none" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Mention line */}
          <path d={linePath(mPts)} fill="none" stroke="#004CE5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Dots */}
          {tPts.map((p, i) => (
            <circle key={`t${i}`} cx={p.x} cy={p.y} r="4.5" fill="#fff" stroke="#10b981" strokeWidth="3" />
          ))}
          {mPts.map((p, i) => (
            <circle key={`m${i}`} cx={p.x} cy={p.y} r="4.5" fill="#fff" stroke="#004CE5" strokeWidth="3" />
          ))}

          {/* Value labels for intermediate dots */}
          {mPts.slice(0, lastIdx).map((p, i) => (
            <text
              key={`mlabel-${i}`}
              x={p.x}
              y={p.y - 12}
              textAnchor="middle"
              className="fill-zinc-800"
              style={{ fontSize: '13px', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}
            >
              {p.v}%
            </text>
          ))}
          {tPts.slice(0, lastIdx).map((p, i) => (
            <text
              key={`tlabel-${i}`}
              x={p.x}
              y={p.y - 12}
              textAnchor="middle"
              className="fill-emerald-600"
              style={{ fontSize: '13px', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}
            >
              {p.v}%
            </text>
          ))}

          {/* End-point value labels */}
          <g>
            <rect x={mPts[lastIdx].x - 44} y={mPts[lastIdx].y - 34} width="72" height="26" rx="6" fill="#004CE5" />
            <text x={mPts[lastIdx].x - 8} y={mPts[lastIdx].y - 15} textAnchor="middle" fill="#fff" style={{ fontSize: '16px', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>
              {product.mention[lastIdx]}%
            </text>
          </g>
          <g>
            <rect x={tPts[lastIdx].x - 44} y={tPts[lastIdx].y + 10} width="72" height="26" rx="6" fill="#10b981" />
            <text x={tPts[lastIdx].x - 8} y={tPts[lastIdx].y + 29} textAnchor="middle" fill="#fff" style={{ fontSize: '16px', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>
              {product.top1[lastIdx]}%
            </text>
          </g>
        </svg>
      </div>

      {/* Footer: half-year deltas */}
      <div className="grid grid-cols-3 gap-4 shrink-0 mt-1">
        <div className="rounded-xl bg-[#004CE5]/[0.04] border border-[#004CE5]/10 px-4 py-4 text-center">
          <p className="text-[1.15rem] font-bold text-zinc-500">提及率半年增幅</p>
          <p className="text-[1.75rem] font-black text-[#004CE5] font-['Montserrat',sans-serif]">▲ {mDelta}pt</p>
        </div>
        <div className="rounded-xl bg-emerald-500/[0.05] border border-emerald-500/10 px-4 py-4 text-center">
          <p className="text-[1.15rem] font-bold text-zinc-500">首推率半年增幅</p>
          <p className="text-[1.75rem] font-black text-emerald-600 font-['Montserrat',sans-serif]">▲ {tDelta}pt</p>
        </div>
        <div className="rounded-xl bg-slate-50 border border-zinc-200/70 px-4 py-4 text-center">
          <p className="text-[1.15rem] font-bold text-zinc-500">平均位次</p>
          <p className="text-[1.75rem] font-black text-zinc-800 font-['Montserrat',sans-serif]">
            {product.rankFrom} → {product.rankTo}
            <span className="text-[1.05rem] text-emerald-600 ml-1.5 font-bold">前移{rankAdvance}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page_TrendAnalysis() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans overflow-hidden">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-[18px]">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          核心指标趋势 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年1–6月）</span>
        </h1>
      </div>

      {/* Remark */}
      <div className="rounded-xl border border-zinc-200 bg-slate-50/40 py-3 px-6 shrink-0 mb-4">
        <p className="text-[1.6rem] leading-relaxed text-zinc-500 font-bold">
          自服务以来，古16、古20 两大单品的 <span className="text-[#004CE5] font-black">提及率</span> 与 <span className="text-emerald-600 font-black">AI首推率</span> 均快速提升，其中提及率在 3 月之后即稳定在 <span className="text-[#004CE5] font-black">90% 以上</span>，品牌推荐生态步入 <span className="text-[#004CE5] font-black">绝对第一梯队</span>。
        </p>
      </div>

      {/* Two charts */}
      <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">
        <TrendChart product={PRODUCTS[0]} gradId="grad16" />
        <TrendChart product={PRODUCTS[1]} gradId="grad20" />
      </div>
    </div>
  );
}
