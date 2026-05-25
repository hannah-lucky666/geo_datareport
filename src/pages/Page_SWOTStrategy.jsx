import React from 'react';

export default function Page_SWOTStrategy() {
    const strategies = [
        {
            id: '策略一',
            title: '从"空间与外观"转向"营养管理能力"',
            problem: '卡萨帝的护城河在于"厨居一体化"的外观（600mm、零闪缝），在这个语境下，方太永远是追随者。同时，卡萨帝的保鲜诉求（15天口感如新）本质上是主观的感官体验。',
            directions: [
                { name: '降低外观竞争权重', desc: '保留基础能力表达，但不作为核心卖点。' },
                { name: '重新定义核心价值', desc: '将产品重点从"空间适配"转为"营养保留能力"，建立新的评价标准。' },
                { name: '改变表达方式', desc: '从"能放多久"转为"保留了多少营养成分"（如维生素、花青素等），把结果从主观体验转为可量化指标。' },
                { name: '目标人群对齐', desc: '对健康管理、母婴、以及高价值食材存储更敏感的人群，这类人更容易接受"营养损耗"这一判断标准。' }
            ]
        },
        {
            id: '策略二',
            title: '用数据替代感知，建立新的判断依据',
            problem: '消费者评价传统冰箱的好坏靠"感觉"和"品牌光环"，这是拥有十余年高端品牌底蕴的卡萨帝的最强护城河，也是作为"冰箱新人"方太的最大劣势。',
            directions: [
                { name: '强化第三方验证', desc: '将权威认证和实验数据作为核心信息，而不是辅助信息。' },
                { name: '统一内容风格', desc: '从"家居展示"转向"测试与对比"，让内容更接近评测而不是广告。' },
                { name: '突出关键指标', desc: '持续展示具体数值（如营养保留率），并与时间维度结合，形成稳定认知。' },
                { name: '建立基础认知框架', desc: '解释不同保鲜技术的差异，让用户理解"为什么会有差别"，而不是只看到结果。' }
            ]
        },
        {
            id: '策略三',
            title: '围绕AI搜索结果做内容布局',
            problem: '卡萨帝在"高端冰箱推荐"等核心泛商业词条中拥有超70%的AI首选推荐率，方太处于严重劣势。但方太在"原鲜冰箱"、"保鲜效果好"等强意向长尾词条拥有近68%的统治力，且AI负面评价为0%。',
            directions: [
                { name: '从长尾切入', desc: '围绕"保鲜效果""营养保留"等高意图关键词建立内容密度。' },
                { name: '建立语义关联', desc: '在内容中反复将"高端冰箱"与"营养保留能力"绑定，逐步影响搜索结果的默认判断标准。' },
                { name: '提高内容权重', desc: '在知乎、评测类平台等更容易被AI抓取的渠道持续输出结构化内容。' },
                { name: '改变决策路径', desc: '让用户在搜索"如何选冰箱"时，优先看到"营养保留能力"这一维度，从而自然进入产品优势区间。' }
            ]
        },
        {
            id: '策略四',
            title: '重构价格理解，而不是解释价格',
            problem: '方太定价在2万-4万元的超高端区间，缺乏全屋家电生态分摊价格感知，消费者极易产生"资历尚浅，凭什么这么贵"、"这钱能买两台日系多门"的负面认知。',
            directions: [
                { name: '避免直接比价', desc: '不引导用户在"冰箱 vs 冰箱"的框架下做选择。' },
                { name: '拆分价值结构', desc: '将产品拆解为多个功能组合（空间能力 + 保鲜技术 + 营养管理），让价格对应具体能力，而不是一个整体标签。' },
                { name: '引入技术来源叙事', desc: '强调技术背景与研发周期，让价格与"技术复杂度"产生关联。' },
                { name: '改变参照系', desc: '将产品放入"健康管理设备"或"功能设备"的认知框架中，而不是传统家电类别。' }
            ]
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">

            {/* Header: Core Idea */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-2 shrink-0">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 sm:h-10 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                        <h1 className="text-3xl xl:text-4xl font-black text-white tracking-widest flex items-baseline">
                            核心思路<span className="text-2xl xl:text-3xl font-bold ml-4 text-white/80 shrink-0">错位竞争，而不是正面消耗</span>
                        </h1>
                    </div>
                    <div className="pl-4 lg:pl-5 border-l-2 border-white/20 ml-2 mt-1 max-w-5xl">
                        <p className="text-[1.02rem] xl:text-[1.14rem] leading-relaxed text-zinc-300 font-medium tracking-wide">
                            避免在外观与空间设计上与成熟品牌正面对抗，把竞争重点转向<strong className="text-white font-bold mx-1">营养保留、数据验证和搜索场景中的决策影响力</strong>，将冰箱从"家电产品"重新定义为<strong className="text-white font-bold ml-1">"功能型设备"</strong>。
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area: 2x2 Grid for Strategies */}
            <div className="flex-1 relative z-10 w-full px-8 lg:px-16 pb-6 xl:pb-8 pt-3 xl:pt-4 flex items-stretch min-h-0">
                <div className="w-full max-w-[1600px] h-full relative">

                    <div className="grid grid-cols-2 grid-rows-2 h-full gap-3 sm:gap-4">
                        {strategies.map((strategy, idx) => (
                            <div key={idx} className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-rose-500/20 p-4 xl:p-5 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />

                                {/* Strategy Header - fixed height for alignment */}
                                <div className="w-full flex items-center mb-2.5 relative z-10 shrink-0 h-7">
                                    <div className="w-1.5 h-5 bg-rose-500 rounded-full mr-2.5 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                                    <h2 className="text-[1.14rem] xl:text-[1.26rem] font-bold tracking-wide text-rose-400 truncate">
                                        {strategy.id}：<span className="text-white/95">{strategy.title}</span>
                                    </h2>
                                </div>

                                <div className="flex-1 min-h-0 w-full flex flex-col gap-2.5 xl:gap-3 relative z-10 overflow-y-auto">
                                    {/* 问题本质 */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-white/80 font-bold block text-[0.94rem] xl:text-[1.0rem]">▼ 问题本质</span>
                                        <p className="text-[0.9rem] xl:text-[0.96rem] text-white/50 leading-snug font-light">
                                            {strategy.problem}
                                        </p>
                                    </div>

                                    {/* 调整方向 */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-white/80 font-bold block text-[0.94rem] xl:text-[1.0rem]">▼ 调整方向</span>
                                        <div className="flex flex-col gap-1.5 xl:gap-2 pl-1.5">
                                            {strategy.directions.map((dir, dIdx) => (
                                                <div key={dIdx} className="flex gap-2 items-start">
                                                    <span className="text-rose-400 font-bold text-[0.94rem] shrink-0 mt-[1px]">•</span>
                                                    <div className="flex-1 text-[0.9rem] xl:text-[0.96rem] leading-snug">
                                                        <span className="font-bold text-white/80 mr-1">{dir.name}：</span>
                                                        <span className="text-white/50">{dir.desc}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
