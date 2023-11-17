import React from "react";

// Import de l'image de texture
import texture from "../assets/img/texture.png";
import { Parallax } from "react-scroll-parallax";

export default function Slogan() {
    return (
        <div id="slogan">
            <div className="container">
                <Parallax speed={10} className="line1">
                    <p>crafting apps</p>
                    <img src={texture} alt="Texture image" />
                </Parallax>
                <Parallax speed={15} className="line2">
                    <p>Inspiring Visions</p>
                    <img src={texture} alt="Texture image" />
                </Parallax>
            </div>
        </div>
    );
}
