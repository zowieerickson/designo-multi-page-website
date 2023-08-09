import Nav from "./Nav"
import SocialContact from "./SocialContact"
import { LightButton } from "./Button"
import LightLogo from "../../assets/shared/desktop/logo-light.png"

import "../../styles/footer.css"

export default function Footer() {
    return (
        <>
            <section className="cta-banner">
                <div className="cta-banner-copy">
                    <h2 className="cta-banner-title">Let’s talk about your&nbsp;project</h2>
                    <p className="cta-banner-body">Ready to take it to the next level? Contact us today and find out how our expertise can help your business&nbsp;grow.</p>
                </div>
                <LightButton children="Get in touch"></LightButton>
            </section>
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
                        <SocialContact/>
                </div>
                </section>
            </footer>
        </>
    )
}