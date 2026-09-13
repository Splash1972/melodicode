import { useRef, useState, useEffect } from 'react';

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function AudioPlayer({ src }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const setAudioDuration = () => setDuration(audio.duration);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', setAudioDuration);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', setAudioDuration);
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e) => {
        const audio = audioRef.current;
        if (!audio) return;
        const time = Number(e.target.value);
        audio.currentTime = time;
        setCurrentTime(time);
    };

    const progress = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div className="player">
            <audio ref={audioRef} src={src} preload="metadata" />
            <button
                className="player__toggle"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
            >
                {isPlaying ? (
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                        <rect x="5" y="4" width="5" height="16" fill="currentColor" />
                        <rect x="14" y="4" width="5" height="16" fill="currentColor" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                        <polygon points="6,4 20,12 6,20" fill="currentColor" />
                    </svg>
                )}
            </button>
            <span className="player__time">{formatTime(currentTime)}</span>
            <input
                type="range"
                className="player__seek"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                style={{ '--progress': `${progress}%` }}
                aria-label="Seek"
            />
            <span className="player__time">{formatTime(duration)}</span>
        </div>
    );
}