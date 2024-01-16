import React from "react";
import Marquee from "react-fast-marquee";

// Import des icons
import { FaFigma, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiCanva,
    SiSass,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const iconStyle = {
    width: "50px",
    height: "50px",
};

const responsiveSize = {
    width: "30px",
    height: "30px",
};

// Tableau de skills
const designSkills = [
    {
        icon: (
            <FaFigma
                style={window.innerWidth < "500px" ? iconStyle : responsiveSize}
            />
        ),
        name: "Figma",
    },
    {
        icon: (
            <SiAdobephotoshop
                style={window.innerWidth < "500px" ? iconStyle : responsiveSize}
            />
        ),
        name: "Photoshop",
    },
    {
        icon: (
            <SiAdobeillustrator
                style={window.innerWidth < "500px" ? iconStyle : responsiveSize}
            />
        ),
        name: "Illustrator",
    },
    {
        icon: (
            <SiCanva
                style={window.innerWidth < "500px" ? iconStyle : responsiveSize}
            />
        ),
        name: "Canva",
    },
];
const devSkills = [
    {
        icon: (
            <FaHtml5
                style={window.innerWidth < "500px" ? iconStyle : responsiveSize}
            />
        ),
        name: "HTML 5",
    },
    {
        icon: (
            <FaCss3Alt
                style={window.innerWidth < "500px" ? iconStyle : responsiveSize}
            />
        ),
        name: "CSS 3",
    },
    {
        icon: (
            <SiSass
                style={window.innerWidth < "500px" ? iconStyle : responsiveSize}
            />
        ),
        name: "Sass",
    },
    {
        icon: (
            <IoLogoJavascript
                style={window.innerWidth < "500px" ? iconStyle : responsiveSize}
            />
        ),
        name: "Javascript",
    },
    {
        icon: (
            <FaReact
                style={window.innerWidth < "500px" ? iconStyle : responsiveSize}
            />
        ),
        name: "React",
    },
];

export default function Skills() {
    return (
        <div id="skills">
            <Marquee autoFill={true} className="marquee">
                {designSkills.map((skill, id) => (
                    <div className="item" key={id}>
                        <div className="icon">{skill.icon}</div>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </Marquee>
            <Marquee autoFill={true} direction="right" className="marquee">
                {devSkills.map((skill, id) => (
                    <div className="item" key={id}>
                        <div className="icon">{skill.icon}</div>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
