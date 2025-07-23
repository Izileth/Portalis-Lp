import React, { useState, useEffect } from 'react';

interface DecryptTextProps {
    text: string;
    speed?: number;
}

const DecryptText = ({ text, speed = 100 }: DecryptTextProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

    useEffect(() => {
        let currentIndex = 0;
        const targetText = text || 'Bem-vindo ao meu portfólio!';

        const interval = setInterval(() => {
        if (currentIndex <= targetText.length) {
            // Gera texto com caracteres aleatórios para as posições não reveladas
            let newText = targetText.slice(0, currentIndex);
            for (let i = currentIndex; i < targetText.length; i++) {
            newText += chars[Math.floor(Math.random() * chars.length)];
            }
            setDisplayedText(newText);
            currentIndex++;
        } else {
            setDisplayedText(targetText);
            setIsComplete(true);
            clearInterval(interval);
        }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <span
        className={`font-semibold text-2xl ${isComplete ? 'text-zinc-950' : 'text-zinc-700'} transition-colors duration-500`}
        >
        {displayedText}
        </span>
    );
};

export default DecryptText;