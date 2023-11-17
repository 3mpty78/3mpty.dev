import "./assets/styles/App.scss";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import CursorSphere from "./components/Cursor.jsx";
import Home from "./components/Home.jsx";
import Navigation from "./components/Navigation.jsx";
import Skills from "./components/Skills.jsx";
import Slogan from "./components/Slogan.jsx";
import Work from "./components/Work.jsx";

function App() {
    return (
        <>
            <CursorSphere />
            <Navigation />
            <Home />
            <About />
            <Work />
            <Slogan />
            <Skills />
            <Contact />
        </>
    );
}

export default App;
