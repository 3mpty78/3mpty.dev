import React from "react";

// Import des images
import texture from "../assets/img/texture.png";
import totoro from "../assets/img/gif/totoro_n&b.gif";

// Import des icons
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { Parallax } from "react-scroll-parallax";

const iconStyle = {
    width: "30px",
    height: "30px",
    color: "91ef58",
};

const responsive = {
    width: "15px",
    height: "15px",
    color: "#91EF58",
};

const socials = [
    {
        name: "Instagram",
        icon: <FaInstagram style={iconStyle} />,
        link: "https://www.instagram.com/3mpty.dev/",
    },
    {
        name: "Linkedin",
        icon: <CiLinkedin style={iconStyle} />,
        link: "https://www.linkedin.com/in/corre-aurelien/",
    },
    {
        name: "GitHub",
        icon: <FiGithub style={iconStyle} />,
        link: "https://github.com/3mpty78",
    },
    {
        name: "Email",
        icon: <MdOutlineEmail style={iconStyle} />,
        link: "mailto:aurelien.corre@outlook.fr",
    },
];

export default function Contact() {
    return (
        <div id="contact">
            {/* <div className="blob"></div> */}
            <h2>
                Let's <span>connect</span>
            </h2>
            <div className="links">
                {socials.map((link, id) => (
                    <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer"
                        key={id}>
                        {link.icon}
                        <p>{link.name}</p>
                    </a>
                ))}
            </div>
            <div className="images">
                <Parallax speed={0} className="first">
                    <img src={texture} alt="Texture background image" />
                </Parallax>
                <Parallax speed={15} className="second">
                    <img
                        src={totoro}
                        alt="Image of Kurosaki ichigo from Bleach (manga)"
                    />
                </Parallax>
            </div>
            <div className="cathy">
                <CiHeart
                    style={window.innerWidth < "500px" ? iconStyle : responsive}
                />
                <p>
                    Inspired by the work of{" "}
                    <span
                        onClick={() => {
                            window.open("https://www.cathydolle.com/");
                        }}>
                        Cathy DOLLE
                    </span>
                </p>
            </div>
        </div>
    );
}
