import React from 'react';
import report from '../data/awadaSeptemberReport.json';

const { compare, scope, rivals, september } = report;

const rivalRows = compare.mention_rate.map((b) => {
  const extra = rivals.find((r) => b.name.includes(r.name)) || {};
  return {
    name: b.name,
    rate: Number(String(b.value).replace('%', '')),
    isTarget: b.isTarget,
    top1: extra.top1 ?? 0,
    listed: extra.listed ?? 0,
  };
});
const rateMax = Math.max(...rivalRows.map((b) => b.rate));

const SCENE_WORDS = ['新手', '家庭', '亲子', '多人', '房车', '自驾', '精致', '高颜值', '好出片', '轻量化', '多功能', '易收纳', '好收纳', '饭盒', '刀具', '水壶', '烤盘', '调料瓶', '原创'];
const isBroad = (n) => !SCENE_WORDS.some((s) => n.includes(s));
const broadEntries = report.entries.filter((e) => isBroad(e.name));
const sceneEntries = report.entries.filter((e) => !isBroad(e.name));
const hit = (list) => list.filter((e) => Number(e.mention_rate) > 0).length;

const entryTypes = [
  {
    name: '大词',
    sample: '露营厨具哪个牌子好',
    total: broadEntries.length,
    zero: broadEntries.length - hit(broadEntries),
    isBroad: true,
  },
  {
    name: '场景词',
    sample: '新手户外厨具推荐',
    total: sceneEntries.length,
    zero: sceneEntries.length - hit(sceneEntries),
  },
];

const platMax = Math.max(...september.platforms.map((p) => p.mention_rate), 1);

function Card({ num, title, lead, actions, children }) {
  return (
    <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] px-6 py-5 flex flex-col min-h-0">
      <h3 className="flex items-baseline gap-3 shrink-0 mb-2">
        <span className="text-[#004CE5] font-black text-2xl shrink-0 font-['Montserrat',sans-serif]">{num}</span>
        <span className="text-[1.6rem] font-black text-zinc-900 tracking-wide">{title}</span>
      </h3>
      <p className="text-[1.18rem] leading-relaxed text-zinc-600 font-bold shrink-0 mb-3 h-[62px]">{lead}</p>
      {actions ? (
        <>
          <div className="h-[336px] shrink-0 flex flex-col">{children}</div>
          <div className="flex-1 min-h-0 flex flex-col gap-4 pt-5">{actions}</div>
        </>
      ) : (
        <div className="flex-1 min-h-0 flex flex-col">{children}</div>
      )}
    </div>
  );
}

function Visual({ label, children }) {
  return (
    <>
      <h4 className="text-[1.02rem] font-black text-zinc-400 tracking-widest mb-2.5 shrink-0">{label}</h4>
      <div className="flex-1 min-h-0 flex flex-col">{children}</div>
    </>
  );
}

function Callout({ children }) {
  return (
    <div className="rounded-xl border-y border-r border-zinc-200 border-l-[5px] border-l-[#004CE5] bg-gradient-to-r from-blue-50/60 via-white to-white px-4 py-2.5">
      <p className="text-[1.02rem] font-bold text-zinc-700 leading-snug">{children}</p>
    </div>
  );
}

function Action({ label, children }) {
  return (
    <p className="text-[1.18rem] leading-relaxed text-zinc-800 font-bold">
      <span className="text-zinc-900 font-black">{label}</span>
      {children}
    </p>
  );
}

export default function Page_NextStepSuggestions() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans bg-white overflow-hidden">
      <div className="flex items-center shrink-0 mb-3.5">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">下一步优化建议</h1>
      </div>

      <div className="rounded-[1.25rem] border-y border-r border-zinc-200 border-l-[6px] border-l-[#004CE5] bg-gradient-to-r from-blue-50/50 via-white to-white px-7 py-4 shrink-0 mb-4 h-[258px] flex gap-9 items-center">
        <div className="w-[33%] shrink-0 flex flex-col gap-2.5">
          <h2 className="text-[1.7rem] font-black text-zinc-900 tracking-wider flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
            核心问题：火枫是默认答案
          </h2>
          <p className="text-[1.18rem] leading-relaxed text-zinc-700 font-bold">
            排在 Awada 前面的，是<strong className="text-[#004CE5]">火枫、挪客、Snow Peak、MSR</strong>等沉淀多年的户外餐厨品牌。模型生成推荐时优先复用这些既有素材，差距不在单篇质量，而在<strong className="text-[#004CE5]">语料存量</strong>。
          </p>
          <p className="rounded-lg bg-[#004CE5]/[0.05] border border-[#004CE5]/15 px-3 py-2 text-[1.02rem] leading-snug text-zinc-600 font-bold">
            火枫进了 <strong className="text-[#004CE5] font-['Montserrat',sans-serif]">22</strong> / {scope.entries} 个词条的推荐榜、拿下
            <strong className="text-[#004CE5] font-['Montserrat',sans-serif]"> 11 </strong>
            个首推；Awada 只进了 2 个词条，分别排在第 5、第 7。
          </p>
        </div>

        <div className="flex-1 min-w-0">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[0.98rem] font-black text-zinc-500 tracking-wider">
                <th className="text-left py-1.5 px-3 rounded-l-lg w-[28%]">领先竞品</th>
                <th className="text-left py-1.5 px-2 w-[42%]">提及率</th>
                <th className="text-center py-1.5 px-2 w-[15%]">首推词条</th>
                <th className="text-center py-1.5 px-2 rounded-r-lg w-[15%]">进榜词条</th>
              </tr>
            </thead>
            <tbody>
              {rivalRows.map((b) => (
                <tr key={b.name} className={`border-b border-zinc-100 last:border-none ${b.isTarget ? 'bg-[#004CE5]/[0.04]' : ''}`}>
                  <td className={`py-[5px] px-3 text-[1.02rem] truncate ${b.isTarget ? 'text-[#004CE5] font-black' : 'text-zinc-700 font-bold'}`}>
                    {b.name}
                  </td>
                  <td className="py-[5px] px-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex-1 h-[18px] bg-zinc-100 rounded-md overflow-hidden">
                        <div
                          className={`h-full rounded-md ${b.isTarget ? 'bg-[#004CE5]' : 'bg-[#004CE5]/35'}`}
                          style={{ width: `${(b.rate / rateMax) * 100}%` }}
                        />
                      </div>
                      <span className={`w-[54px] shrink-0 text-right text-[1.02rem] font-black font-['Montserrat',sans-serif] ${b.isTarget ? 'text-[#004CE5]' : 'text-zinc-500'}`}>
                        {b.rate}%
                      </span>
                    </div>
                  </td>
                  <td className={`py-[5px] px-2 text-center text-[1.15rem] font-black font-['Montserrat',sans-serif] ${b.isTarget ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
                    {b.top1}
                  </td>
                  <td className={`py-[5px] px-2 text-center text-[1.15rem] font-black font-['Montserrat',sans-serif] ${b.isTarget ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
                    {b.listed}
                    <span className="text-[0.92rem] font-bold text-zinc-400">/{scope.entries}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[0.92rem] font-bold text-zinc-400 leading-snug mt-2.5 shrink-0">
            首推词条 = 在该词条 AI 回答中排第 1 的次数；进榜词条 = 进入 AI 推荐榜单前 9 位的词条数。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
        <Card
          num="01"
          title="平台：把 DeepSeek 路径同步出去"
          lead="DeepSeek 已到 10%，豆包 7.5%，元宝和通义千问还只有 5%。四端都破零了，后两端仍掉队。"
        >
          <Visual label="四个平台 9 月提及率">
            <div className="flex-1 min-h-0 flex flex-col justify-between pt-1 pb-1">
              <div className="flex flex-col gap-3">
                {september.platforms.map((p) => (
                  <div key={p.name} className="flex flex-col gap-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className={`text-[1.15rem] font-black ${p.name === 'DeepSeek' ? 'text-[#004CE5]' : 'text-zinc-700'}`}>{p.name}</span>
                      <span className={`text-[1.45rem] font-black font-['Montserrat',sans-serif] ${p.name === 'DeepSeek' ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
                        {p.mention_rate}%
                      </span>
                    </div>
                    <div className="h-[36px] bg-zinc-100 rounded-lg overflow-hidden">
                      <div
                        className={`h-full rounded-lg ${p.name === 'DeepSeek' ? 'bg-[#004CE5]' : 'bg-[#004CE5]/35'}`}
                        style={{ width: `${(p.mention_rate / platMax) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Callout>
                优化前只有 DeepSeek 有声量。9 月四端均已破零，下一步是把专业餐厨、精致露营、泛选购大词同步到元宝和通义千问。
              </Callout>
            </div>
          </Visual>
        </Card>

        <Card
          num="02"
          title="词条：先把大词和场景词补上"
          lead={`${scope.entries} 个词条里仍有 ${scope.entries - september.covered_entries} 个是 0。大词竞争最激烈；场景词里家庭已破零，新手/亲子/房车/自驾仍整段空白。`}
          actions={
            <>
              <Action label="先攻大词：">「露营厨具哪个牌子好」仍是 0，「口碑好的户外厨具推荐」刚破零，不进这些词就很难挤进默认推荐。</Action>
              <Action label="再补场景：">家庭已破零，新手、亲子、房车、自驾仍全部为零，这是 Awada 最容易做出差异的问法。</Action>
            </>
          }
        >
          <Visual label={`${scope.entries} 个词条长什么样`}>
            <div className="flex-1 flex flex-col justify-between pt-1 pb-1">
              <div className="grid grid-cols-2 gap-3">
                {entryTypes.map((t) => (
                  <div
                    key={t.name}
                    className={`rounded-xl border px-4 py-3 flex flex-col gap-1.5 ${
                      t.isBroad ? 'border-[#004CE5]/25 bg-[#004CE5]/[0.03]' : 'border-zinc-200 bg-slate-50/60'
                    }`}
                  >
                    <span className={`text-[1.1rem] font-black tracking-wide ${t.isBroad ? 'text-[#004CE5]' : 'text-zinc-600'}`}>{t.name}</span>
                    <span className={`text-[2.3rem] font-black leading-none font-['Montserrat',sans-serif] ${t.isBroad ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
                      {t.total}
                      <span className="text-[1rem] font-extrabold text-zinc-500 font-sans ml-1.5">个</span>
                    </span>
                    <span className="text-[0.95rem] font-bold text-zinc-400 leading-snug">例：「{t.sample}」</span>
                    <span className="text-[1rem] font-bold text-zinc-500 leading-snug">
                      其中 <strong className="text-[1.15rem] font-black text-zinc-800 font-['Montserrat',sans-serif]">{t.zero}</strong> 个还是 0
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-[#004CE5]/15 bg-[#004CE5]/[0.03] px-4 py-2 flex items-center justify-around">
                {[
                  { v: september.covered_entries, u: '个已覆盖' },
                  { v: scope.entries - september.covered_entries, u: '个仍为 0', hl: true },
                  { v: scope.entries, u: '个词条' },
                ].map((m, i) => (
                  <React.Fragment key={m.u}>
                    {i > 0 && <span className="text-[1.3rem] font-black text-zinc-300">/</span>}
                    <span className="flex items-baseline gap-1.5">
                      <strong className={`text-[1.55rem] font-black font-['Montserrat',sans-serif] ${m.hl ? 'text-[#004CE5]' : 'text-zinc-800'}`}>
                        {m.v}
                      </strong>
                      <span className="text-[0.95rem] font-bold text-zinc-500">{m.u}</span>
                    </span>
                  </React.Fragment>
                ))}
              </div>

              <Callout>
                大词仍多是火枫、挪客的场；新手/亲子/房车/自驾还没人替 Awada 说话，先把这两头补上。
              </Callout>
            </div>
          </Visual>
        </Card>

        <Card
          num="03"
          title="首推：进榜之后要往前抢"
          lead="提及率已经从 1.9% 做到 6.9%，Top1 升至 1.3%。火枫拿走 11 个首推，Awada 一个都没有。"
          actions={
            <>
              <Action label="守住这 10 个：">已覆盖词条里把「首选 Awada」写清楚，先把位次从中后段推到前三。</Action>
              <Action label="盯住火枫同台：">专业餐厨、精致露营是火枫最稳的场，同场必须给出 Awada 更好用、更好收纳的结论。</Action>
            </>
          }
        >
          <Visual label="推荐榜里谁占走了位置">
            <div className="flex-1 flex flex-col justify-between pt-1 pb-1">
              {rivals.slice(0, 3).concat(rivals.slice(-1)).map((s) => (
                <div key={s.name} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline gap-2.5">
                    <span className={`text-[1.2rem] font-black ${s.isTarget ? 'text-[#004CE5]' : 'text-zinc-700'}`}>{s.name}</span>
                    <span className={`text-[1.6rem] font-black font-['Montserrat',sans-serif] ${s.isTarget ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
                      {s.listed}
                    </span>
                    <span className="text-[0.98rem] font-bold text-zinc-500">个词条进榜</span>
                    <span className="text-[0.95rem] font-bold text-zinc-400">首推 {s.top1}</span>
                  </div>
                  <div className="h-[36px] bg-zinc-100 rounded-lg overflow-hidden">
                    <div
                      className={`h-full rounded-lg ${s.isTarget ? 'bg-[#004CE5]' : 'bg-zinc-300'}`}
                      style={{ width: `${(s.listed / Math.max(...rivals.map((r) => r.listed), 1)) * 100}%` }}
                    />
                  </div>
                </div>
              ))}

              <Callout>
                Awada 在「精致露营厨具品牌推荐」排第 5、「露营厨具推荐」排第 7。进榜不等于被推荐，下一阶段要抢前三。
              </Callout>
            </div>
          </Visual>
        </Card>
      </div>
    </div>
  );
}
