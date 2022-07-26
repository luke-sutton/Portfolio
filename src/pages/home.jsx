import React, { useState } from "react";
import About from "../components/About";
import SkillsSection from "../components/SkillsSection";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Services from "../components/ProjectsSection";
import Footer from "../components/Footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <About />
            <SkillsSection />
            <Services />
            <Footer />
        </>
    );
};

export default Home;
