import React from "react";
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./skills/skills";
import Projects from "./Projects/Projects";
import DistantWork from "./distantWork/DistantWork";
import Contacts from "./contact/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects />
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
