/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Alexandrie Grenier",
  title: "Web Designer & Content Creator",
  email: "alex@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};
const SocialLinks = () => {
  // A function to handle the click event
  const handleClick = (url) => {
    if (!url) {
      // Prevent redirection if URL is empty
      return;
    }
    window.open(url, "_blank");
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClick(siteProps.gitHub);
        }}
      >
        GitHub
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClick(siteProps.instagram);
        }}
      >
        Instagram
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClick(siteProps.linkedIn);
        }}
      >
        LinkedIn
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClick(siteProps.twitter);
        }}
      >
        Twitter
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClick(siteProps.youTube);
        }}
      >
        YouTube
      </button>
    </div>
  );
};

export { SocialLinks };

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Education />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
