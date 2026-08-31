import React from 'react';
import report from '../data/yuanyueAugustReport.json';

const { compare, delivery, scope } = report;

// 领先竞品档案：提及率取自 compare.mention_rate，所属集团 / 首推词条数 / 进榜词条数
// 来自 8月31日 competitors/compare 的 entry_brand_details（每个词条取 AI 榜单前 9 位）
const RIVAL_PROFILE = {
  派星: { group: '合生元', top1: 11, listed: 44 },
  卓傲: { group: '爱他美', top1: 7, listed: 30 },
  星飞帆: { group: '飞鹤', top1: 10, listed: 34 },
  金领冠珍护铂萃: { group: '伊利', top1: 5, listed: 28 },
  源悦: { group: '美素佳儿', top1: 1, listed: 9 },
};

const rivals = compare.mention_rate.map((b) => ({
  name: b.name,
  rate: Number(String(b.value).replace('%', '')),
  isTarget: b.isTarget,
  ...RIVAL_PROFILE[b.name],
}));
const rateMax = Math.max(...rivals.map((b) => b.rate));

const cases = [
  { img: '/cases/case_douyin_01.png', like: '2622', star: '1232' },
  { img: '/cases/case_douyin_02.png', like: '2005', star: '1572' },
];

const caseTakeaways = ['标题直接用词条原句', '全程硬字幕，文本可被抓取', '系列化更新，形成主题聚合'];

// 词条构成：无人群 / 症状限定的泛选购问法记为大词
const SCENE_WORDS = ['消化', '吸收', '便秘', '排便', '水解', '转奶', '过敏', '长肉', '体重', '攒肚', '肠胃'];
const isBroad = (n) => !SCENE_WORDS.some((s) => n.includes(s));
const broadEntries = report.entries.filter((e) => isBroad(e.name));
const sceneEntries = report.entries.filter((e) => !isBroad(e.name));
const hit = (list) => list.filter((e) => Number(e.mention_rate) > 0).length;

const entryTypes = [
  {
    name: '大词',
    sample: '婴儿奶粉排行榜推荐',
    total: broadEntries.length,
    zero: broadEntries.length - hit(broadEntries),
    isBroad: true,
  },
  {
    name: '场景词',
    sample: '宝宝便秘喝什么牌子奶粉',
    total: sceneEntries.length,
    zero: sceneEntries.length - hit(sceneEntries),
  },
];
// 美素佳儿系在 61 个词条中的进榜分配（8月31日 entry_brand_details）
const frisoSkus = [
  { name: '皇家美素佳儿', listed: 16 },
  { name: '源悦', listed: 9, isTarget: true },
];
const frisoMax = Math.max(...frisoSkus.map((s) => s.listed));

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
          {/* 固定高度，保证图示区与结论区横向对齐 */}
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

// 沿用核心数据总览表头的蓝色梯度
const PLATFORM_BADGE = {
  deep: 'bg-[#004CE5] text-white',
  light: 'bg-[#2E75FF] text-white',
};

function Platform({ name, badge, children }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-slate-50/50 px-3.5 py-2.5 flex-auto flex flex-col justify-center gap-2">
      <span className={`self-start px-2.5 py-0.5 rounded-lg text-[1.1rem] font-extrabold shrink-0 ${PLATFORM_BADGE[badge]}`}>{name}</span>
      {children}
    </div>
  );
}

function Point({ label, children }) {
  return (
    <div className="text-[1rem] leading-snug font-bold text-zinc-600">
      <span className="text-zinc-900 font-black">{label}：</span>
      {children}
    </div>
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

      {/* 核心问题 */}
      <div className="rounded-[1.25rem] border-y border-r border-zinc-200 border-l-[6px] border-l-[#004CE5] bg-gradient-to-r from-blue-50/50 via-white to-white px-7 py-4 shrink-0 mb-4 h-[228px] flex gap-9 items-center">
        <div className="w-[33%] shrink-0 flex flex-col gap-2.5">
          <h2 className="text-[1.7rem] font-black text-zinc-900 tracking-wider flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
            核心问题：竞品是大品牌，语料积累久
          </h2>
          <p className="text-[1.18rem] leading-relaxed text-zinc-700 font-bold">
            排在源悦前面的，是<strong className="text-[#004CE5]">合生元、爱他美、飞鹤、伊利</strong>等头部集团的主力单品，在测评榜单与母婴社区沉淀多年。模型生成推荐时优先复用这些既有素材，差距不在单篇质量，而在<strong className="text-[#004CE5]">语料存量</strong>。
          </p>
          <p className="rounded-lg bg-[#004CE5]/[0.05] border border-[#004CE5]/15 px-3 py-2 text-[1.02rem] leading-snug text-zinc-600 font-bold">
            AI 回答共出现 <strong className="text-[#004CE5] font-['Montserrat',sans-serif]">36</strong> 个品牌、
            <strong className="text-[#004CE5] font-['Montserrat',sans-serif]">102</strong> 款产品；君乐宝、金领冠、雀巢各 10 款、爱他美 8 款同时在榜，美素佳儿仅 4 款。
          </p>
        </div>

        <div className="flex-1 min-w-0">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[0.98rem] font-black text-zinc-500 tracking-wider">
                <th className="text-left py-1.5 px-3 rounded-l-lg w-[21%]">领先竞品</th>
                <th className="text-left py-1.5 px-2 w-[13%]">所属集团</th>
                <th className="text-left py-1.5 px-2 w-[36%]">提及率</th>
                <th className="text-center py-1.5 px-2 w-[15%]">首推词条</th>
                <th className="text-center py-1.5 px-2 rounded-r-lg w-[15%]">进榜词条</th>
              </tr>
            </thead>
            <tbody>
              {rivals.map((b) => (
                <tr key={b.name} className={`border-b border-zinc-100 last:border-none ${b.isTarget ? 'bg-[#004CE5]/[0.04]' : ''}`}>
                  <td className={`py-[7px] px-3 text-[1.08rem] truncate ${b.isTarget ? 'text-[#004CE5] font-black' : 'text-zinc-700 font-bold'}`}>
                    {b.name}
                  </td>
                  <td className={`py-[7px] px-2 text-[1.02rem] font-bold ${b.isTarget ? 'text-[#004CE5]' : 'text-zinc-500'}`}>{b.group}</td>
                  <td className="py-[7px] px-2">
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
                  <td className={`py-[7px] px-2 text-center text-[1.15rem] font-black font-['Montserrat',sans-serif] ${b.isTarget ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
                    {b.top1}
                  </td>
                  <td className={`py-[7px] px-2 text-center text-[1.15rem] font-black font-['Montserrat',sans-serif] ${b.isTarget ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
                    {b.listed}
                    <span className="text-[0.92rem] font-bold text-zinc-400">/{scope.entries}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[0.92rem] font-bold text-zinc-400 leading-snug mt-1.5">
            首推词条 = 在该词条 AI 回答中排第 1 的次数；进榜词条 = 进入 AI 推荐榜单前 9 位的词条数。
          </p>
        </div>
      </div>

      {/* 三条建议 */}
      <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
        <Card
          num="01"
          title="投放：两个平台各自加量提质"
          lead="两个平台分开排期，都要加量 + 提质。提质拆成内容质量、账号与平台质量两件事。"
        >
          <Visual label="豆包 / DeepSeek 分别怎么补">
            <div className="flex-1 min-h-0 flex flex-col gap-2.5">
              <Platform name="豆包" badge="deep">
                <Point label="加量">抖音 16 篇、今日头条 36 篇零引用，需单独排期补量。</Point>
                <div className="flex gap-3 min-h-0">
                  <div className="flex gap-2 shrink-0">
                    {cases.map((c) => (
                      <div key={c.img} className="relative w-[104px] rounded-md overflow-hidden border border-zinc-200 shadow-sm">
                        <img src={c.img} alt="抖音优质内容案例" className="w-full h-[140px] object-cover" />
                        <div className="absolute inset-x-0 bottom-0 bg-zinc-900/60 text-white px-1 py-0.5 flex justify-between text-[0.72rem] font-bold font-['Montserrat',sans-serif]">
                          <span>♥{c.like}</span>
                          <span>★{c.star}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                    <span className="text-[1rem] font-black text-zinc-900">提质 · 内容：</span>
                    {caseTakeaways.map((t) => (
                      <span key={t} className="flex items-start gap-1.5 text-[0.98rem] font-bold text-zinc-600 leading-snug">
                        <span className="text-emerald-500 font-black shrink-0">✓</span>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Point label="提质 · 账号平台">换成粉丝与互动量更高的抖音、头条账号。</Point>
              </Platform>

              <Platform name="DeepSeek" badge="light">
                <Point label="加量">
                  {delivery.overview.delivery_articles} 篇里仅 {delivery.overview.cited_articles} 篇被引用（
                  {delivery.overview.cited_rate}%），稿子基数太小。
                </Point>
                <Point label="提质 · 内容">「榜单 + 参数对比」长文最易被抓：2 篇生物在线稿贡献 97 次引用。</Point>
                <Point label="提质 · 账号平台">
                  同为什么值得买，综合速递 4 篇拿 35 次、杂物社 14 篇仅 2 次，预算往高产账号集中。
                </Point>
              </Platform>
            </div>
          </Visual>
        </Card>

        <Card
          num="02"
          title="词条：投放量要成倍加上去"
          lead={`${scope.entries} 个词条里有 ${broadEntries.length} 个是大词，大词竞争最激烈、需要的稿量最大，而我们现在每个词条平均只有 2 篇。`}
          actions={
            <>
              <Action label="加量：">投放总量成倍提升，先把每个词条的稿量从 2 篇提上去。</Action>
              <Action label="偏重大词：">{broadEntries.length} 个大词要按数倍于场景词的量排稿，才有机会挤进榜单。</Action>
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
                  { v: delivery.overview.delivery_articles, u: '篇投放' },
                  { v: scope.entries, u: '个词条' },
                  { v: 2, u: '篇 / 词条', hl: true },
                ].map((m, i) => (
                  <React.Fragment key={m.u}>
                    {i > 0 && <span className="text-[1.3rem] font-black text-zinc-300">{i === 1 ? '÷' : '≈'}</span>}
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
                大词是所有品牌都在抢的词，榜单前 9 位被派星、珍护占满，每个词条 2 篇稿子根本挤不进去。
              </Callout>
            </div>
          </Visual>
        </Card>

        <Card
          num="03"
          title="内耗：别和自家产品抢位置"
          lead="美素佳儿已经进了 23 个词条的 AI 推荐榜，但其中 16 个上榜的是皇家美素佳儿，源悦进了 9 个。"
          actions={
            <>
              <Action label="分开投：">源悦和皇家美素佳儿别投同一批词条，避免自家两款产品互相顶替。</Action>
              <Action label="先攻这 16 个：">皇家已进榜说明模型认这个品牌，源悦补上内容最容易跟着进去。</Action>
            </>
          }
        >
          <Visual label="美素佳儿进榜的 23 个词条，谁占走了">
            <div className="flex-1 flex flex-col justify-between pt-1 pb-1">
              {frisoSkus.map((s) => (
                <div key={s.name} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline gap-2.5">
                    <span className={`text-[1.2rem] font-black ${s.isTarget ? 'text-[#004CE5]' : 'text-zinc-700'}`}>{s.name}</span>
                    <span className={`text-[1.6rem] font-black font-['Montserrat',sans-serif] ${s.isTarget ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
                      {s.listed}
                    </span>
                    <span className="text-[0.98rem] font-bold text-zinc-500">个词条</span>
                  </div>
                  <div className="h-[52px] bg-zinc-100 rounded-lg overflow-hidden">
                    <div
                      className={`h-full rounded-lg ${s.isTarget ? 'bg-[#004CE5]' : 'bg-zinc-300'}`}
                      style={{ width: `${(s.listed / frisoMax) * 100}%` }}
                    />
                  </div>
                </div>
              ))}

              <Callout>
                两款同时上榜的 4 个词条上，皇家都排在源悦前面，最近一次是
                <strong className="text-zinc-900">皇家第 2</strong>、
                <strong className="text-[#004CE5]">源悦第 3</strong>，自家产品直接挡在前面。
              </Callout>
            </div>
          </Visual>
        </Card>
      </div>
    </div>
  );
}
