import React from 'react';

const About = () => {
    return (
        <div className="container page-content">
            <h1 className="h1">О сообществе</h1>
            <div className="card">
                <h2 className="h2">Наша цель</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>
                    Мы объединяем людей по интересам, делимся полезным контентом и проводим регулярные встречи.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Это приложение создано для удобного доступа к нашим материалам прямо из Telegram.
                </p>
            </div>

            <div className="card">
                <h2 className="h2">Контакты</h2>
                <button className="btn-primary" onClick={() => window.Telegram?.WebApp?.openTelegramLink('https://t.me/example')}>
                    Написать админу
                </button>
            </div>
        </div>
    );
};

export default About;
