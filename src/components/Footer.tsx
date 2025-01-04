"use client"; // クライアントコンポーネントとしてマーク

import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

// Font Awesomeのスタイルシートをインポート

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    background-color: #132343; /* 背景色を追加 */
                }
                i {
                    font-size: 30px; /* アイコンのサイズ */
                    margin: 0 5px;
                    color: #8E8B95; /* アイコンの色 */
                    transition: color 0.3s, transform 0.3s; /* 色と変形のトランジションを設定 */
                }

                i:hover {
                    color: #4acdf5; /* ホバー時の色 */
                    transform: scale(1.1); /* ホバー時に1.1倍に拡大 */
                }

                @media (min-width: 768px) {
                    i {
                        margin: 0 10px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;