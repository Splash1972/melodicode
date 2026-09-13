export default function Nav() {
    const links = [
        { href: '#about', label: 'About' },
        { href: '#work', label: 'Work' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="nav">
            <a href="#top" className="nav__brand">melodicode</a>
            <div className="nav__links">
                {links.map((link) => (
                    <a key={link.href} href={link.href} className="nav__link">
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}