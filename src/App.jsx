import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx"
import Projects from "./sections/Projects.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import Experience from "./sections/Experience.jsx"

import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
    return (
        <main className={"max-w-7xl mx-auto"}>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
            <SpeedInsights />
        </main>
    )
}
export default App
