import React, { useState, useEffect, useRef } from 'react';

export default function SlideContainer({ children }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [scale, setScale] = useState(1);
    const containerRef = useRef(null);

    const SLIDE_WIDTH = 1920;
    const SLIDE_HEIGHT = 1080;

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    useEffect(() => {
        const updateScale = () => {
            if (!containerRef.current) return;
            const parent = containerRef.current.parentElement;

            const paddingX = isFullscreen ? 0 : 64;
            const paddingY = isFullscreen ? 0 : 64;

            const availableWidth = parent.clientWidth - paddingX;
            const availableHeight = parent.clientHeight - paddingY;

            const scaleX = availableWidth / SLIDE_WIDTH;
            const scaleY = availableHeight / SLIDE_HEIGHT;

            setScale(Math.min(scaleX, scaleY));
        };

        const resizeObserver = new ResizeObserver(updateScale);
        if (containerRef.current && containerRef.current.parentElement) {
            resizeObserver.observe(containerRef.current.parentElement);
        }

        updateScale();
        window.addEventListener('resize', updateScale);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateScale);
        };
    }, [isFullscreen]);

    return (
        <div className={`w-screen h-screen bg-zinc-950 flex items-center justify-center overflow-hidden antialiased selection:bg-zinc-100 ${isFullscreen ? 'p-0' : 'p-4 sm:p-8'}`}>
            <div ref={containerRef} className="w-full h-full flex items-center justify-center relative">
                <div
                    className={`relative bg-white overflow-hidden origin-center transition-shadow duration-500 ${isFullscreen ? '' : 'shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl'}`}
                    style={{
                        width: `${SLIDE_WIDTH}px`,
                        height: `${SLIDE_HEIGHT}px`,
                        zoom: scale,
                        flexShrink: 0
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
