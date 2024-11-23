
// We have to export to use it outsite this document
export default function Header () {
    return (
        <header>
            <nav className="nav">
                <img src="/react-logo.png"className="nav-image" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

