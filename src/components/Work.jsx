import React from "react";

// Import des mockups des projets
import ronan from "../assets/img/mockups/ronan.png";
import empty7 from "../assets/img/mockups/empty.png";
import jeunepauvre from "../assets/img/mockups/ypa-3.png";
import baudic from "../assets/img/mockups/baudic_3.png";

const projects = [
    {
        name: "BAUDIC Taxis",
        category: "Showcase website",
        image: baudic,
        link: "https://baudictaxis.vercel.app/",
    },
    {
        name: "Empty7",
        category: "Artist's news website",
        image: empty7,
        link: "https://empty7.vercel.app/",
    },
    {
        name: "Yung Poor Alo",
        category: "Artist's news website",
        image: jeunepauvre,
        link: "https://jeunepauvre.vercel.app/",
    },
    {
        name: "Ronan DERUET",
        category: "Portfolio",
        image: ronan,
        link: "https://rawnan.vercel.app/",
    },
];

export default function Work() {
    return (
        <div id="work">
            <h2>
                Some of my <span>work</span>_
            </h2>
            <div data-aos="fade-up" className="worksContainer">
                {projects.map((project, id) => (
                    <a
                        href={project.link}
                        key={id}
                        target="_blank"
                        rel="noreferrer">
                        <div className="imageContainer">
                            <img
                                src={project.image}
                                alt={`Mockup preview of ${project.name}'s website`}
                            />
                        </div>
                        <div className="text">
                            <p>{project.name}</p>
                            <p>{project.category}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
