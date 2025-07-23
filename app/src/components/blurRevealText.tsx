import React, { useState, useEffect } from 'react';
interface BlurRevealTextProps {
    text: string;
    duration?: number;
}

const BlurRevealText = ({ text, duration = 2000 }: BlurRevealTextProps) => {
    const [blurAmount, setBlurAmount] = useState(10); // Valor inicial de blur em px
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
        setBlurAmount((prev) => {
            if (prev <= 0) {
            clearInterval(interval);
            setIsRevealed(true);
            return 0;
            }
            return prev - 0.5; // Reduz o blur gradualmente
        });
        }, duration / 20); // Ajusta a velocidade da animação (20 passos)

        return () => clearInterval(interval);
    }, [duration]);

    return (
        <span
        className={`
            inline-block text-3xl font-bold text-white
            transition-all duration-300 ease-in-out
            ${isRevealed ? 'opacity-100' : 'opacity-70'}
        `}
        style={{ filter: `blur(${blurAmount}px)` }}
        >
        {text || 'Texto Revelado'}
        </span>
    );
};

export default BlurRevealText;