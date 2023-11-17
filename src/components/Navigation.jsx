import React from "react";

const navLInks = [
    {
        name: "projects_",
        link: "#work",
    },
    {
        name: "contact_",
        link: "#",
    },
];

export default function Navigation() {
    return (
        <nav>
            <ul>
                {navLInks.map((item, id) => (
                    <li key={id}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
