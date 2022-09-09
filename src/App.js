import React from "react";
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import OpenToWork from "./OpenToWork/OpenToWork";
import Contacts from "./Contact/Contacts";
import Footer from "./Footer/Footer";
import AboutMe from "./AboutMe/AboutMe";
import {MyResume} from "./MyResume/MyResume";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <MyResume/>
            <Skills/>
            <Projects />
            <OpenToWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
