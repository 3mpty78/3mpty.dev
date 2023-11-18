import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import Lenis from "@studio-freight/lenis";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
    <ParallaxProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ParallaxProvider>
);
