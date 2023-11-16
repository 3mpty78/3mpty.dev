import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import Lenis from "@studio-freight/lenis";
import { ParallaxProvider } from "react-scroll-parallax";

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
    <ParallaxProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ParallaxProvider>
);
