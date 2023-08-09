import { LightButton } from "../global/Button"
import HeroImage from "../../assets/home/desktop/image-hero-phone.png"
import "../../styles/hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-copy-wrapper">
                <h2 className="hero-title">Award-winning custom designs and digital branding solutions</h2>
                <p className="hero-copy">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <LightButton>Learn more</LightButton>
            </div>
            <div className="hero-bgimage-wrapper">
                <figure className="hero-bgimage"></figure>
            </div>
        </section>
    )
}