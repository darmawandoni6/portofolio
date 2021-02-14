import React from "react";
import Awards from "../component/Awards";
import Education from "../component/Education";
import Experience from "../component/Experience";
import Expertise from "../component/Expertise";
import Intro from "../component/Intro";
import NameProfile from "../component/NameProfile";
import Profile from "../component/Profile";
import Skills from "../component/Skills";
import MyContact from "../component/MyContact";
import Project from "../component/Project";

const Container = () => {
  return (
    <div className="container">
      <NameProfile />
      <Intro />
      <Expertise />
      <Skills />
      <Experience />
      <Education />
      <Profile />
      <Awards />
      <Project />
      <MyContact />
    </div>
  );
};

export default Container;
