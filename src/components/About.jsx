import React from "react";
import { Parallax } from "react-scroll-parallax";

// Import des images
import texture from "../assets/img/texture.png";
import ichigoat from "../assets/img/ichigo_pixel.png";
import thumb from "../assets/img/gif/thumb.gif";

export default function About() {
    return (
        <div id="about">
            <h2>
                About <span>me</span>_
            </h2>
            <div className="images">
                <Parallax speed={10} className="first">
                    <img src={texture} alt="Texture background image" />
                </Parallax>
                <Parallax speed={5} className="second">
                    <img
                        src={ichigoat}
                        alt="Image of Kurosaki ichigo from Bleach (manga)"
                    />
                </Parallax>
            </div>
            <div data-aos="fade-up" className="biography">
                <p>
                    Hi 👋, <br /> <br /> I'm Aurélien, a 27 years old web
                    developer student. <br /> <br /> My main focus is on honing
                    my skills in <span>front-end development</span>,
                    particularly with <span>React</span>. I'm also excited about
                    diving into mobile development, with a keen interest in{" "}
                    <span>React Native</span> and <span>Swift</span>. <br />{" "}
                    <br />
                    Let's create amazing digital experiences together !
                </p>
                <br />
            </div>
        </div>
    );
}
