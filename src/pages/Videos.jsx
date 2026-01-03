import React from 'react';
import { Play } from 'lucide-react';

const Videos = () => {
    const videos = [
        { id: 1, title: 'Как масштабировать сообщество', duration: '45:00', views: '1.2k' },
        { id: 2, title: 'Разбор ошибок новичков', duration: '1:12:30', views: '850' },
        { id: 3, title: 'Интервью с экспертом', duration: '58:15', views: '2.3k' },
    ];

    return (
        <div className="container page-content">
            <header style={{ marginBottom: 20 }}>
                <h1 className="h1">Эфиры</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Записи прямых трансляций</p>
            </header>

            <div style={{ display: 'grid', gap: 16 }}>
                {videos.map(v => (
                    <div key={v.id} className="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{
                            height: 160,
                            background: 'linear-gradient(45deg, #27272a 0%, #3f3f46 100%)',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                background: 'rgba(0,0,0,0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(4px)'
                            }}>
                                <Play size={24} fill="white" stroke="none" style={{ marginLeft: 4 }} />
                            </div>
                        </div>
                        <div style={{ padding: 16 }}>
                            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{v.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: 'var(--text-secondary)' }}>
                                <span>{v.duration}</span>
                                <span>•</span>
                                <span>{v.views} просмотров</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videos;
