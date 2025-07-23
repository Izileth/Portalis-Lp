import React, { useState } from 'react';

interface GradientTextProps {
    text: string;
    baseColor?: string;
}

const GradientText = ({ text, baseColor = 'blue' }: GradientTextProps) => {
    const [isHovered, setIsHovered] = useState(false);

    // Define as classes do gradiente e sombra com base no estado de hover
    const gradientClass = `bg-gradient-to-r from-${baseColor}-400 to-${baseColor}-600`;
    const shadowClass = isHovered
        ? `shadow-[4px_4px_10px_rgba(0,0,0,0.8)]`
        : `shadow-[2px_2px_5px_rgba(0,0,0,0.4)]`;

    return (
        <span
        className={`
            inline-block text-3xl font-bold text-transparent bg-clip-text
            ${gradientClass}
            ${shadowClass}
            transition-all duration-300 ease-in-out
            transform ${isHovered ? 'scale-105' : 'scale-100'}
            cursor-pointer
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        {text || 'Texto com Gradiente'}
        </span>
    );
};

export default GradientText;