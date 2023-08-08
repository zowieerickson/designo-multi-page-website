import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { useEffect } from "react";

export default function Contact(props) {

    useEffect(() => {
        document.title = props.title || "Designo";
      }, [props.title]);

    return (
        <>
            <Nav />
            <h1>Contact page</h1>
            <Footer />
        </>
    )
}