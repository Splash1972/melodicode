import AudioPlayer from './AudioPlayer';

const tracks = [
    {
        title: 'Artifact',
        role: 'Composer',
        description: 'A journey into a cinematic landscape.',
        audioSrc: '/audio/Artifact.mp3',
    },
    {
        title: 'Holding Out For A Hero',
        role: 'Producer (cover song feat. Rivka Chaim)',
        description: 'A reimagined cinematic version.',
        audioSrc: '/audio/holding-out-for-a-hero.mp3',
    },
    {
        title: 'No Contest',
        role: 'Composer',
        description: 'A hybrid cinematic piece with fierce horns.',
        audioSrc: '/audio/No Contest.mp3',
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
                            <AudioPlayer src={track.audioSrc} />
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}