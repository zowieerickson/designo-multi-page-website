import Nav from "./Nav"
import LightLogo from "../assets/shared/desktop/logo-light.png"
import "../styles/footer.css"

export default function Footer() {
    return (
        <footer className="globalfooter" id="globalfooter" lang="en-US">
            <Nav logoImage={LightLogo} />
            <section className="contact">
                <div className="contact-address">
                    <h4>Designo Central Office</h4>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="contact-methods">
                    <h4>Contact Us (Central Office)</h4>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>
                <div className="contact-social">

                </div>
            </section>
        </footer>
    )
}