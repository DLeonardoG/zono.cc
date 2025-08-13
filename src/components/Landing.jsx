import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";


export default function Landing() {
    return (
        <>
            <Header
                logo={{ src: "/zono.png", alt: "Zono", href: "/" }}
                navItems={[
                    { label: "Inicio", href: "#home" },
                    { label: "¿Quienes somos?", href: "#quienes_somos" },
                    { label: "3Parte", href: "#quienes_somos" },
                    { label: "¿Como funciona?", href: "#funcion" },
                    { label: "Razones", href: "#funcion" },
                ]}
                cta={{ label: "Iniciar sesión", href: "https://ui.zono.cc/" }}
                height={80}
                compactHeight={64}
                transparentUntilScroll
            />
            <Home />
            <AboutUs
                youtubeId="https://www.youtube.com/embed/py2LRfVc-IQ?si=tyX3YIP5q9UGELsx"
                ctaHref="https://docs.google.com/forms/d/e/1FAIpQLSeVFtm3CHkGyQSudbZ49xsSQWphEzCfgRk_mhabNENn96CCyw/viewform"
                ctaLabel="Regístrate GRATIS"
                ctaNewTab
            />

        </>

    )
}