import React, { useEffect } from "react";
import "./styles.css";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

const siteProps = {
  name: "Nymphalys",
  title: "Backend Web Developer",
  email: "kumariladli2882@gmail.com",
  gitHub: "https://github.com/Nymphalys",
  instagram: "https://www.instagram.com/__ladli___/",
  linkedIn: "https://www.linkedin.com/in/nymphalys/",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  useEffect(() => {
    let cursor = document.getElementById("cursor");
    document.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    });
  }, []);

  return (
    <div className="app">
      <div id="cursor"></div>
      <div className="main">
        <Header />
        <Home name={siteProps.name} title={siteProps.title} />
        <About />
        <Portfolio />
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
    </div>
  );
};

export default App;
