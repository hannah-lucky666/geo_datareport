import React from 'react';

export default function CoverSlide({ bgImage, brand, subtitle, date }) {
    const subtitleLines = subtitle ? subtitle.split('\n') : [];

    return (
        <div className="w-full h-full flex bg-[#F8F9FA] relative overflow-hidden font-sans select-none">
            {/* Background Accent Grid / Subtle Lines for high-end look */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Left Panel: Clean, High-End Typography */}
            <div className="w-[44%] h-full flex flex-col justify-between pl-16 pr-8 py-16 z-10">
                {/* Top Section: Brand Label */}
                {brand && (
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.4)]" />
                        <span className="text-zinc-950 font-black text-4xl tracking-[0.02em] uppercase">
                            {brand}
                        </span>
                    </div>
                )}

                {/* Mid Section: Massive Title */}
                <div className="my-auto py-6">
                    <div className="flex flex-col gap-3">
                        {subtitleLines.map((line, i) => (
                            <h1
                                key={i}
                                className="text-zinc-900 font-black tracking-tight leading-[1.04] font-['Inter',sans-serif]"
                                style={{
                                    fontSize: '5.8rem',
                                    letterSpacing: '-0.04em',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.02)',
                                }}
                            >
                                {line.trim()}
                            </h1>
                        ))}
                    </div>
                    {/* Visual Divider */}
                    <div className="w-20 h-1 bg-[#004CE5] rounded-full mt-10 mb-6 shadow-[0_2px_8px_rgba(0,76,229,0.3)]" />
                </div>

                {/* Bottom Section: Date Metadata */}
                <div className="flex items-center border-t border-zinc-200/80 pt-6">
                    <span className="text-zinc-900 font-black text-2xl tracking-wider font-['Montserrat']">
                        {date}
                    </span>
                </div>
            </div>

            {/* Right Panel: Breathtaking Rounded Image Card */}
            <div className="w-[56%] h-full p-6 flex items-center justify-center">
                <div className="w-full h-full rounded-[3.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] relative bg-[#eef2f6]">
                    {/* Blended Background Gradient (Mesh Gradient style) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#004CE5]/10 via-indigo-50/20 to-white/10 z-0 pointer-events-none" />

                    {/* Image */}
                    {bgImage ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
                            style={{ 
                                backgroundImage: `url(${bgImage})`,
                                mixBlendMode: 'multiply',
                                opacity: 0.9,
                            }}
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 animate-gradient" />
                    )}

                    {/* Image Glassy Overlay / Dark shadow border */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35 pointer-events-none" />

                    {/* Bottom Circular Next Arrow */}
                    <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-white flex items-center justify-center text-zinc-950 shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 z-20 group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transform group-hover:translate-x-1.5 transition-transform duration-300"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
