import React from 'react';

export default function Page_ProposalChapterCover({
    bgImage,
    title,
    subtitle,
    brandLabel,
    chapterIndex = 0,
    chapters = [],
}) {
    const chapterNum = String(chapterIndex + 1).padStart(2, '0');

    return (
        <div className="w-full h-full relative overflow-hidden bg-black">

            {/* ── 背景图 ── */}
            {bgImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
            )}

            {/* ── 右上角：横线 + 品牌标签（与目录页保持一致） ── */}
            <div
                className="absolute flex items-center gap-[16px]"
                style={{ top: '38px', right: '93px' }}
            >
                <div className="h-[1px] bg-white/30" style={{ width: '200px' }} />
                <span
                    className="text-white font-light"
                    style={{ fontSize: '26px', letterSpacing: '0.3em', fontFamily: "'Montserrat', sans-serif" }}
                >
                    {brandLabel}
                </span>
            </div>

            {/* ── 左侧中偏上：章节大标题 ── */}
            {title && (
                <h1
                    className="absolute text-white font-black"
                    style={{
                        fontFamily: "'AlimamaShuHeiTi', sans-serif",
                        fontSize: '182px',
                        lineHeight: '1.1',
                        letterSpacing: '0.02em',
                        top: '350px',
                        left: '66px',
                        maxWidth: '1400px',
                    }}
                >
                    {title}
                </h1>
            )}

            {/* ── 左下角：章节列表 ── */}
            <div
                className="absolute flex flex-col gap-[10px]"
                style={{ bottom: '90px', left: '96px' }}
            >
                {chapters.map((ch, i) => {
                    const isActive = i === chapterIndex;
                    const num = String(i + 1).padStart(2, '0');
                    return (
                        <div
                            key={i}
                            className="flex items-center gap-[2px]"
                            style={{ fontSize: '32px', lineHeight: '1.4' }}
                        >
                            <span
                                style={{
                                    color: isActive ? 'rgb(0, 76, 229)' : 'rgba(255,255,255,0.45)',
                                    fontWeight: isActive ? '500' : '400',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {num}.
                            </span>
                            <span
                                style={{
                                    color: isActive ? 'rgb(0, 76, 229)' : 'rgba(255,255,255,0.45)',
                                    fontWeight: isActive ? '500' : '400',
                                    letterSpacing: '0.02em',
                                    marginLeft: '2px',
                                }}
                            >
                                {ch.title}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* ── 右下角：大章节编号 + 英文标签 ── */}
            <div
                className="absolute flex flex-col items-end"
                style={{ right: '45px', bottom: '74px' }}
            >
                <span
                    className="text-white leading-none"
                    style={{
                        fontFamily: "'Roboto', 'AlimamaShuHeiTi', sans-serif",
                        fontSize: '428px',
                        lineHeight: '0.85',
                        letterSpacing: '-0.02em',
                        fontWeight: 300,
                    }}
                >
                    {chapterNum}
                </span>
                {subtitle && (
                    <span
                        className="text-white uppercase"
                        style={{
                            fontSize: '34px',
                            marginTop: '42px',
                            fontFamily: "'MiSans', sans-serif",
                            letterSpacing: 0,
                            fontWeight: 300,
                            marginRight: '79px',
                        }}
                    >
                        {subtitle}
                    </span>
                )}
            </div>
        </div>
    );
}
