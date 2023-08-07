import Nav from "./Nav"
import LightLogo from "../assets/shared/desktop/logo-light.png"
import "../styles/footer.css"

export default function Footer() {
    return (
        <footer className="globalfooter" id="globalfooter" lang="en-US">
            <Nav logoImage={LightLogo} />
            <section className="contact">
                <div className="contact-address">
                    <h3>Designo Central Office</h3>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="contact-methods">
                    <h3>Contact Us (Central Office)</h3>
                    <p><strong><a href="tel:+1 253-863-8967">P : +1 253-863-8967</a></strong></p>
                    <p ><strong><a href="mailto:contact@designo.co">M : contact@designo.co</a></strong></p>
                </div>
                <div className="contact-social">

                </div>
            </section>
        </footer>
    )
}