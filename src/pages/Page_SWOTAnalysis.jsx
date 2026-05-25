import React from 'react';

export default function Page_SWOTAnalysis() {
    const swotData = {
        S: [
            { id: 'S1', title: '行业标准的绝对定义权（高）', content: '联合制定“原创平嵌”标准，在空间美学上构筑了极深的护城河与话语权。' },
            { id: 'S2', title: '极致的平嵌物理与工程设计（高）', content: '遵循594mm深度与前置散热，实现“零闪缝”无死角开门。' },
            { id: 'S3', title: '庞大的智慧家庭生态协同能力（高）', content: '与旗下智慧厨电深度打通，提供一站式无缝饮食解决方案。' },
            { id: 'S4', title: '绝对统治级的AI搜索心智与流量（高）', content: 'GEO数据总体提及率高达70.3%，Top1首选占比31.4%，展现压倒性优势。' },
            { id: 'S5', title: '深厚的品牌底蕴与信任资产（中/高）', content: '深耕高端市场，在消费者心智中建立起品牌溢价与高端安全感。' },
        ],
        W: [
            { id: 'W1', title: '保鲜技术的代际局限性（中/高）', content: '核心保鲜属“被动抑制”，易受“主动制氮”等跨界技术实施维度打击。' },
            { id: 'W2', title: '评价标准的感官主观性（中）', content: '保鲜效果主要诉诸主观体验，缺乏权威量化的客观实验数据支撑。' },
            { id: 'W3', title: '营销语境易陷入传统“物理参数”内卷（中）', content: '过度绑定“缝隙尺寸”等外在参数，易被后发破局者借全新赛道解构。' },
        ],
        T: [
            { id: 'T1', title: '跨界破局者的“降维打击”与赛道重新定义（高）', content: '厨电巨头携新科技入局，试图将标准从“外观美学”拉向“量化营养锁定”。' },
            { id: 'T2', title: '传统巨头的战术跟进与价格封杀（中/高）', content: '竞争对手若推出平替产品或降价，将挤压终端铺货和溢价空间。' },
            { id: 'T3', title: '消费决策面临更严苛的品味与溢价审视（中）', content: '经济周期下，消费者对高单价产品的功能价值与社交溢价审视更为苛刻。' },
        ],
        O: [
            { id: 'O1', title: '高端定制与“厨居一体化”市场持续扩容（高）', content: '高净值人群对极简美学追求升级，一体化家装市场盘子仍在扩张。' },
            { id: 'O2', title: '生成式AI技术重塑用户决策路径（高）*', content: '重度决策依赖AI调研，利好卡萨帝现有的高权重AI资产与流量流转。' },
            { id: 'O3', title: '消费者对“全健康、无缝智能”的诉求升级（中/高）', content: '用户痛点从“不坏”转至“营养管理”，推动冰箱向健康仪器升维。' },
        ]
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 w-full px-8 lg:px-16 pb-12 mt-8 flex items-center justify-center">

                <div className="w-full max-w-[1500px] h-full relative">

                    {/* SVG Cross Lines */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    </div>

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-2 grid-rows-2 h-full gap-6 sm:gap-8 pt-2 pb-2">

                        {/* Top Left: Strengths */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-rose-500/20 p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-start items-center mb-6 relative z-10">
                                <h2 className="text-2xl font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-rose-400">优势</span>
                                    <span className="text-xl text-white/90">（Strengths）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-4 relative z-10 w-full">
                                {swotData.S.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-rose-400 text-base font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[1.05rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.95rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Right: Weaknesses */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-white/5 p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-end items-center mb-6 relative z-10">
                                <h2 className="text-2xl font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-white/90">劣势</span>
                                    <span className="text-xl text-white/70">（Weaknesses）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-4 relative z-10 w-full">
                                {swotData.W.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-white/70 text-base font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[1.05rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.95rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Left: Threats */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-white/5 p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-start items-center mb-6 relative z-10">
                                <h2 className="text-2xl font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-white/90">威胁</span>
                                    <span className="text-xl text-white/70">（Threats）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-4 relative z-10 w-full">
                                {swotData.T.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-white/70 text-base font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[1.05rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.95rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Right: Opportunities */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-rose-500/20 p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tl from-rose-500/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-end items-center mb-6 relative z-10">
                                <h2 className="text-2xl font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-rose-400">机遇</span>
                                    <span className="text-xl text-white/90">（Opportunities）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-4 relative z-10 w-full">
                                {swotData.O.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-rose-400 text-base font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[1.05rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.95rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Center Medal */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] z-20 flex items-center justify-center pointer-events-none drop-shadow-2xl">
                        {/* Outer Ring */}
                        <div className="absolute inset-0 rounded-full bg-black/60 backdrop-blur-xl border-4 border-[#222] overflow-hidden">
                            {/* Colorful Segments matching reference */}
                            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-rose-600" />
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#555]" />
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#666]" />
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-rose-500" />
                        </div>
                        {/* Inner Ring Data Text */}
                        <div className="absolute inset-[15px] rounded-full bg-white flex items-center justify-center p-4">
                            <div className="grid grid-cols-2 grid-rows-2 w-full h-full text-center relative gap-1">
                                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black/10 -translate-x-1/2" />
                                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black/10 -translate-y-1/2" />

                                <div className="flex items-center justify-center text-4xl font-black text-rose-600 tracking-tighter">S</div>
                                <div className="flex items-center justify-center text-4xl font-black text-[#666] tracking-tighter">W</div>
                                <div className="flex items-center justify-center text-4xl font-black text-[#555] tracking-tighter">T</div>
                                <div className="flex items-center justify-center text-4xl font-black text-rose-600 tracking-tighter">O</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 4px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}} />
        </div>
    );
}
