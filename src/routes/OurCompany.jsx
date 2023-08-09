import Nav from "../components/global/Nav"
import Footer from "../components/global/Footer"
import { useEffect } from "react";

export default function OurCompany(props) {

    useEffect(() => {
        document.title = props.title || "Designo";
      }, [props.title]);

    return (
        <>
            <Nav />
            <h1>OurCompany page</h1>
            <Footer />
        </>
    )
}