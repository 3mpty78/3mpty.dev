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

// Tableau de skills
const designSkills = [
    {
        icon: <FaFigma style={iconStyle} />,
        name: "Figma",
    },
    {
        icon: <SiAdobephotoshop style={iconStyle} />,
        name: "Photoshop",
    },
    {
        icon: <SiAdobeillustrator style={iconStyle} />,
        name: "Photoshop",
    },
    {
        icon: <SiCanva style={iconStyle} />,
        name: "Canva",
    },
];
const devSkills = [
    {
        icon: <FaHtml5 style={iconStyle} />,
        name: "HTML 5",
    },
    {
        icon: <FaCss3Alt style={iconStyle} />,
        name: "CSS 3",
    },
    {
        icon: <SiSass style={iconStyle} />,
        name: "Sass",
    },
    {
        icon: <IoLogoJavascript style={iconStyle} />,
        name: "Javascript",
    },
    {
        icon: <FaReact style={iconStyle} />,
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
