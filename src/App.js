import React from "react";
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./skills/skills";
import MyWorks from "./myWorks/myWorks";
import DistantWork from "./distantWork/DistantWork";
import Contacts from "./contact/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
