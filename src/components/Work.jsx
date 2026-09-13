const tracks = [
    {
        title: 'Sunny Side Up',
        role: 'Composer',
        description: 'A jazz lead sheet built around a bright, walking melody.',
    },
    {
        title: 'Come Out and Play',
        role: 'Co-writer',
        description: 'An indie-electronic collaboration exploring texture and space.',
    },
];

export default function Work() {
    return (
        <section id="work" className="work">
            <span className="section__label">Work</span>
            <ol className="work__list">
                {tracks.map((track, index) => (
                    <li key={track.title} className="work__item">
                        <span className="work__index">{String(index + 1).padStart(2, '0')}</span>
                        <div className="work__details">
                            <h3 className="work__title">{track.title}</h3>
                            <p className="work__meta">{track.role}</p>
                            <p className="work__description">{track.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}