import React from "react";

// Import des images
import texture from "../assets/img/texture.png";

import profilPicture from "../assets/img/ProfilPicture.png";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
    return (
        <>
            <div className="blob"></div>
            <div id="home">
                <div className="title">
                    <h1>
                        CORRE <span>Aurelien</span>
                    </h1>
                    <h2>
                        <span>Front-end</span> developer_
                    </h2>
                </div>
                <div className="images">
                    <Parallax speed={0} className="first">
                        <img src={texture} alt="Texture background image" />
                    </Parallax>
                    <Parallax speed={10} className="second">
                        <img src={profilPicture} alt="Current profil picture" />
                    </Parallax>
                </div>
            </div>
        </>
    );
}
