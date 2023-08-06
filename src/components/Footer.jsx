import Nav from "./Nav"
import LightLogo from "../assets/shared/desktop/logo-light.png"
import "../styles/footer.css"

export default function Footer() {
    return (
        <footer className="globalfooter" id="globalfooter" lang="en-US">
            <h1>this is a footer</h1>
            <h1>this is a footer</h1>
            <h1>this is a footer</h1>
            <h1>this is a footer</h1>
            <h1>this is a footer</h1>
            <Nav logoImage={LightLogo} />
        </footer>
    )
}