export default function Hero() {
    return (
        <section id="top" className="hero">
            <h1 className="hero__title">melodicode</h1>
            <p className="hero__tagline">
                Cinematic scores and songs, written and produced for screen, stage, and speakers.
            </p>
            <svg className="hero__wave" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
                <path
                    className="hero__wave-path"
                    d="M0,30 C50,10 100,50 150,30 C200,10 250,50 300,30 C350,10 400,50 450,30 C500,10 550,50 600,30"
                    fill="none"
                />
            </svg>
        </section>
    );
}