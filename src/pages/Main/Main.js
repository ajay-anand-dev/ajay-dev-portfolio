/* eslint-disable no-empty-pattern */
import React, { useRef } from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Self, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth", duration: 2000, spyOn: true });
    };

    const scrollAt = (content) => {
        if (content === 'home') {
            return homeRef
        } else if (content === 'about') {
            return aboutRef
        } else if (content === 'skills') {
            return skillsRef
        } else if (content === 'projects') {
            return projectsRef
        } else if (content === 'contacts') {
            return contactRef
        }
    }

    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar scrollTo={(atContent) => scrollToSection(scrollAt(atContent))} />
            <Landing ref={homeRef} scrollTo={() => scrollToSection(contactRef)} />
            <About ref={aboutRef} />
            <Education ref={educationRef} />
            <Skills ref={skillsRef} />
            <Experience />
            <Projects ref={projectsRef} />
            <Achievement />
            <Services />
            <Testimonials />
            <Self />
            <Contacts ref={contactRef} />
            <Footer />
        </div>
    )
}

export default Main
