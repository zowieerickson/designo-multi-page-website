import Logo from "../assets/shared/desktop/logo-dark.png"
import "../styles/nav.css"

export default function Nav() {
    return (
        <nav id="globalnav" className="globalnav" lang="en-US" aria-label="Global">
            <a className="globalnav-logo" href="/"><img src={Logo} alt="" /></a>
            <ul className="globalnav-list">
                <li className="globalnav-item"><a href="/company">Our Company</a></li>
                <li className="globalnav-item"><a href="/locations">Locations</a></li>
                <li className="globalnav-item"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}