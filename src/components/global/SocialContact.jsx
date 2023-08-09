import {ReactComponent as FacebookLogo} from "../../assets/shared/desktop/icon-facebook.svg"
import {ReactComponent as YoutubeLogo} from "../../assets/shared/desktop/icon-youtube.svg"
import {ReactComponent as TwitterLogo} from "../../assets/shared/desktop/icon-twitter.svg"
import {ReactComponent as PinterestLogo} from "../../assets/shared/desktop/icon-pinterest.svg"
import {ReactComponent as InstagramLogo} from "../../assets/shared/desktop/icon-instagram.svg"

export default function SocialContact() {
    return (
        <>
            <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><FacebookLogo /></a>
            <a href="https://www.youtube.com/" target="_blank" aria-label="Youtube"><YoutubeLogo /></a>
            <a href="https://www.twitter.com/" target="_blank" aria-label="Twitter"><TwitterLogo /></a>
            <a href="https://www.pinterest.com/" target="_blank" aria-label="Pinterest"><PinterestLogo /></a>
            <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram"><InstagramLogo /></a>
        </>
    )
}