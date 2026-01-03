import React from 'react';
import { Check } from 'lucide-react';

const Home = () => {
    const topics = [
        { id: 1, icon: '⚡', title: 'Искусственный интеллект', preview: 'Поделюсь своим опытом длиною в год, перепробовал больш...', date: 'Ср', link: 'https://t.me/Poleznoe755/10' },
        { id: 2, icon: '#', title: 'General', preview: 'Для получения заказа нужно показать этот QR-код в пункт...', date: 'Вт', link: 'https://t.me/Poleznoe755/1' },
        { id: 3, icon: '🚮', title: 'Промты', preview: 'Фотография', date: '25.12.25', link: 'https://t.me/Poleznoe755/603' },
        { id: 4, icon: '🔝', title: 'Тренды и новинки', preview: 'Не знаю, зачем делаю это бесплатно (видимо, моя прос...', date: '19.12.25', link: 'https://t.me/Poleznoe755/11' },
        { id: 5, icon: '🧮', title: 'Таблички', preview: 'https://ecomunit.ru/wb', date: '18.12.25', link: 'https://t.me/Poleznoe755/8' },
        { id: 6, icon: '🕰', title: 'Эфиры', preview: '🔥 Пост с зашкаливающим количеством пользы', date: '11.12.25', link: 'https://t.me/Poleznoe755/7' },
        { id: 7, icon: '🟣', title: 'Wildberries', preview: 'Скриншот 03-12-2025 143207.jpg', date: '03.12.25', link: 'https://t.me/Poleznoe755/3' },
        { id: 8, icon: '📘', title: 'Книги, статьи', preview: 'ССЫЛКИ ИЗ РОЛИКОВ • loldev();', date: '24.10.25', link: 'https://t.me/Poleznoe755/14' },
        { id: 9, icon: '🌐', title: 'Блогеры', preview: 'Видео', date: '28.07.25', link: 'https://t.me/Poleznoe755/26' },
    ];

    const handleTopicClick = (link) => {
        // Проверяем, запущены ли мы внутри Telegram
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.openTelegramLink(link);
        } else {
            // Фолбек для браузера
            window.open(link, '_blank');
        }
    };

    return (
        <div className="container page-content" style={{ maxWidth: '100%', padding: 0 }}>
            <header style={{ padding: '12px 16px', background: 'var(--bg-color)', position: 'sticky', top: 0, zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <button onClick={() => window.history.back()} style={{ padding: 4, color: 'white' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <div>
                            <h1 className="h1" style={{ fontSize: 20, margin: 0 }}>Полезное</h1>
                            <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 2 }}>1 участник</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: 16, color: 'white' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                    </div>
                </div>
            </header>

            <div className="list-container">
                {topics.map(topic => (
                    <div
                        key={topic.id}
                        className="list-item"
                        onClick={() => handleTopicClick(topic.link)}
                    >
                        <div className="list-icon-wrapper">
                            {topic.id === 1 || topic.id === 3 || topic.id === 4 || topic.id === 5 || topic.id === 6 || topic.id === 7 || topic.id === 8 || topic.id === 9 ? (
                                topic.icon
                            ) : (
                                <div className="avatar-placeholder">{topic.icon}</div>
                            )}
                        </div>
                        <div className="list-content">
                            <div className="list-header">
                                <span className="list-title" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    {topic.title}
                                    {/* Mute icon logic just for demo */}
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                                </span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    {topic.id === 1 && <Check size={16} color="#3b82f6" />}
                                    {topic.id === 2 && <Check size={16} color="#3b82f6" />}
                                    {/* Add ticks to others randomly for realism */}
                                    <span className="list-date">{topic.date}</span>
                                </div>
                            </div>
                            <div className="list-preview">
                                {topic.title === 'Искусственный интеллект' && <span style={{ color: '#3b82f6' }}>Вы: </span>}
                                {topic.title === 'General' && <span style={{ color: '#3b82f6' }}>Вы: </span>}
                                {topic.title === 'General' && '📷 '}
                                {topic.title === 'Промты' && <span style={{ color: '#3b82f6' }}>Вы: </span>}
                                {topic.title === 'Промты' && '🖼️ '}
                                {topic.title === 'Тренды и новинки' && <span style={{ color: '#3b82f6' }}>Вы: </span>}
                                {topic.title === 'Тренды и новинки' && '📎 '}
                                {topic.title === 'Таблички' && <span style={{ color: '#3b82f6' }}>Вы: </span>}
                                {topic.title === 'Эфиры' && <span style={{ color: '#3b82f6' }}>Вы: </span>}
                                {topic.title === 'Wildberries' && <span style={{ color: '#3b82f6' }}>Вы: </span>}
                                {topic.title === 'Wildberries' && '📎 '}
                                {topic.title === 'Книги, статьи' && <span style={{ color: '#3b82f6' }}>Вы: </span>}
                                {topic.title === 'Блогеры' && <span style={{ color: '#3b82f6' }}>Вы: </span>}
                                {topic.title === 'Блогеры' && '📹 '}
                                {topic.preview}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
