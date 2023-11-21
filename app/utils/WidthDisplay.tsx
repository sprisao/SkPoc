'use client'
import { useState, useEffect } from 'react';

const WidthDisplay = () => {
    // 초기 상태를 null이나 0으로 설정
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
        // 클라이언트 사이드에서만 window 객체 사용
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);

            const handleResize = () => {
                setWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            // 이벤트 리스너 정리
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            {width && <p>현재 너비: {width}px</p>}
        </div>
    );
};

export default WidthDisplay;
