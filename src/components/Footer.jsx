import Nav from "./Nav"
import LightLogo from "../assets/shared/desktop/logo-light.png"
import {ReactComponent as FacebookLogo} from "../assets/shared/desktop/icon-facebook.svg"
import {ReactComponent as YoutubeLogo} from "../assets/shared/desktop/icon-youtube.svg"
import {ReactComponent as TwitterLogo} from "../assets/shared/desktop/icon-twitter.svg"
import {ReactComponent as PinterestLogo} from "../assets/shared/desktop/icon-pinterest.svg"
import {ReactComponent as InstagramLogo} from "../assets/shared/desktop/icon-instagram.svg"
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
                  <FacebookLogo /> 
                  <YoutubeLogo /> 
                  <TwitterLogo /> 
                  <PinterestLogo /> 
                  <InstagramLogo /> 
              </div>
            </section>
        </footer>
    )
}