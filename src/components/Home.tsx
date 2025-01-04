"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect } from 'react';
import './Home.css'; // 外部CSSファイルをインポート

const Home: React.FC = () => {
    useEffect(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.addEventListener('mouseover', handleMouseOver);
            heroContent.addEventListener('mouseout', handleMouseOut);
        }

        function handleMouseOver(event: MouseEvent) {
            if (event.target instanceof HTMLElement && event.target.classList.contains('char')) {
                event.target.style.transform = 'scale(1.5)';
            }
        }

        function handleMouseOut(event: MouseEvent) {
            if (event.target instanceof HTMLElement && event.target.classList.contains('char')) {
                event.target.style.transform = 'scale(1)';
            }
        }

        return () => {
            if (heroContent) {
                heroContent.removeEventListener('mouseover', handleMouseOver);
                heroContent.removeEventListener('mouseout', handleMouseOut);
            }
        };
    }, []);

    // 各文字を<span>タグで囲む（スペースも含む）
    const wrapText = (text: string) => {
        return text.split('').map((char, index) => {
            const className = char === ' ' ? 'space' : 'char';
            return (
                <span key={index} className={className}>
                    {char}
                </span>
            );
        });
    };

    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1>{wrapText('Naoki Orimi')}</h1>
                    <br />
                    <p>{wrapText("Welcome to my portfolio. I'm a software engineer.")}</p>
                </div>
            </section>
        </main>
    );
};

export default Home;