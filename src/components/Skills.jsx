import React, { useEffect } from "react";

// Import splide

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

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
    width: "30px",
    height: "30px",
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
            <Splide
                options={{
                    type: "loop",
                    drag: "free",
                    arrows: false,
                    pagination: false,
                    perPage: 5,
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: -1,
                    },
                }}
                extensions={{ AutoScroll }}>
                {designSkills.map((skill, id) => (
                    <SplideSlide className="item" key={id}>
                        <div className="icon">{skill.icon}</div>
                        <p>{skill.name}</p>
                    </SplideSlide>
                ))}
            </Splide>
            <Splide
                options={{
                    type: "loop",
                    gap: 0,
                    drag: "free",
                    arrows: false,
                    pagination: false,
                    perPage: 5,
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: true,
                        speed: 1,
                    },
                }}
                extensions={{ AutoScroll }}>
                {devSkills.map((skill, id) => (
                    <SplideSlide className="item" key={id}>
                        <div className="icon">{skill.icon}</div>
                        <p>{skill.name}</p>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
